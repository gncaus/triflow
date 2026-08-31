import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "node:crypto";
import { readDb, writeDb } from "./db.js";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
const OTP_TTL_MS = 15 * 60 * 1000;
const RESET_TTL_MS = 60 * 60 * 1000;

if (!JWT_SECRET) {
  throw new Error(
    "JWT_SECRET não está definido. Copie .env.example para .env e defina um segredo antes de iniciar o servidor."
  );
}

function signToken(user) {
  return jwt.sign({ sub: user.id, email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

function generateOtp() {
  return String(crypto.randomInt(0, 1000000)).padStart(6, "0");
}

function findUser(db, email) {
  return db.users.find((u) => u.email.toLowerCase() === String(email || "").toLowerCase());
}

// TODO: replace with a real email provider (Resend, SES, Postmark...) before
// going live. For now, verification/reset codes are logged to the server
// console so the flow works end-to-end locally without any email setup.
function sendEmail(to, subject, body) {
  console.log(`\n[email] to=${to} subject="${subject}"\n${body}\n`);
}

export function authMiddleware(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Not authenticated" });
  try {
    req.auth = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired session" });
  }
}

const router = Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "Email and password are required" });
  if (password.length < 8) return res.status(400).json({ error: "Password must be at least 8 characters" });

  const db = readDb();
  const existing = findUser(db, email);
  if (existing && existing.verified) {
    return res.status(409).json({ error: "An account with this email already exists" });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const otpCode = generateOtp();
  const user = existing || {
    id: crypto.randomUUID(),
    email,
    role: "user",
    verified: false,
    createdAt: new Date().toISOString(),
  };
  user.passwordHash = passwordHash;
  user.otpCode = otpCode;
  user.otpExpiresAt = Date.now() + OTP_TTL_MS;

  if (!existing) db.users.push(user);
  writeDb(db);

  sendEmail(email, "Confirme seu e-mail — TriFlow Treinos", `Seu código de verificação é: ${otpCode}`);

  res.json({ ok: true });
});

router.post("/verify-otp", (req, res) => {
  const { email, otpCode } = req.body || {};
  const db = readDb();
  const user = findUser(db, email);
  if (!user || !user.otpCode) return res.status(400).json({ error: "Invalid or expired code" });
  if (user.otpExpiresAt < Date.now()) return res.status(400).json({ error: "Code expired, request a new one" });
  if (user.otpCode !== otpCode) return res.status(400).json({ error: "Incorrect code" });

  user.verified = true;
  delete user.otpCode;
  delete user.otpExpiresAt;
  writeDb(db);

  res.json({ access_token: signToken(user) });
});

router.post("/resend-otp", (req, res) => {
  const { email } = req.body || {};
  const db = readDb();
  const user = findUser(db, email);
  if (user && !user.verified) {
    user.otpCode = generateOtp();
    user.otpExpiresAt = Date.now() + OTP_TTL_MS;
    writeDb(db);
    sendEmail(email, "Novo código — TriFlow Treinos", `Seu novo código de verificação é: ${user.otpCode}`);
  }
  // Always respond ok — don't leak whether the account exists.
  res.json({ ok: true });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body || {};
  const db = readDb();
  const user = findUser(db, email);
  if (!user || !user.verified) return res.status(401).json({ error: "Invalid email or password" });

  const ok = await bcrypt.compare(password || "", user.passwordHash);
  if (!ok) return res.status(401).json({ error: "Invalid email or password" });

  res.json({ access_token: signToken(user) });
});

router.post("/forgot-password", (req, res) => {
  const { email } = req.body || {};
  const db = readDb();
  const user = findUser(db, email);
  if (user) {
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiresAt = Date.now() + RESET_TTL_MS;
    writeDb(db);
    sendEmail(email, "Redefinir senha — TriFlow Treinos", `Link: /reset-password?token=${resetToken}`);
  }
  // Always respond ok — never reveal whether the email exists.
  res.json({ ok: true });
});

router.post("/reset-password", async (req, res) => {
  const { token, newPassword } = req.body || {};
  if (!token || !newPassword) return res.status(400).json({ error: "Missing token or new password" });
  if (newPassword.length < 8) return res.status(400).json({ error: "Password must be at least 8 characters" });

  const db = readDb();
  const user = db.users.find((u) => u.resetToken === token);
  if (!user || !user.resetTokenExpiresAt || user.resetTokenExpiresAt < Date.now()) {
    return res.status(400).json({ error: "Invalid or expired reset link" });
  }

  user.passwordHash = await bcrypt.hash(newPassword, 10);
  delete user.resetToken;
  delete user.resetTokenExpiresAt;
  writeDb(db);

  res.json({ ok: true });
});

router.get("/me", authMiddleware, (req, res) => {
  const db = readDb();
  const user = db.users.find((u) => u.id === req.auth.sub);
  if (!user) return res.status(401).json({ error: "Not authenticated" });
  res.json({ user: { id: user.id, email: user.email, role: user.role } });
});

export default router;
