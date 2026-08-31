import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import authRouter from "./auth.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
// API_PORT takes priority over PORT: dev tools often already export PORT for
// the frontend process, and we don't want to silently bind there too. In a
// real single-process deployment (no API_PORT set), PORT is honored as the
// platform-assigned port.
const PORT = process.env.API_PORT || process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || true, credentials: true }));
app.use(express.json());

app.use("/api/auth", authRouter);

// Serve the built frontend (after `npm run build`) so `npm start` alone is
// enough to run the whole app as a single deployable process.
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`API + app rodando em http://localhost:${PORT}`);
});
