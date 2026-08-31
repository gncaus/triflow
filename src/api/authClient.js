// Replaces the Base44 SDK client (src/api/base44Client.js in the original
// project). Talks to our own Express + JWT backend (server/index.js) via the
// same-origin /api/auth/* routes (proxied by Vite in dev, served directly in
// prod). Mirrors the base44.auth.* call shapes the pages used, so page code
// only needed its import + call-site prefix updated.

const TOKEN_KEY = "triflow_access_token";

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

async function request(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`/api/auth${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  let data = null;
  try {
    data = await res.json();
  } catch {
    // no JSON body
  }
  if (!res.ok) {
    throw new Error((data && data.error) || "Something went wrong. Please try again.");
  }
  return data;
}

export const authClient = {
  async loginViaEmailPassword(email, password) {
    const data = await request("/login", { method: "POST", body: { email, password } });
    setToken(data.access_token);
    return data;
  },

  async register({ email, password }) {
    return request("/register", { method: "POST", body: { email, password } });
  },

  async verifyOtp({ email, otpCode }) {
    const data = await request("/verify-otp", { method: "POST", body: { email, otpCode } });
    if (data.access_token) setToken(data.access_token);
    return data;
  },

  async resendOtp(email) {
    return request("/resend-otp", { method: "POST", body: { email } });
  },

  async resetPasswordRequest(email) {
    return request("/forgot-password", { method: "POST", body: { email } });
  },

  async resetPassword({ resetToken, newPassword }) {
    return request("/reset-password", { method: "POST", body: { token: resetToken, newPassword } });
  },

  // eslint-disable-next-line no-unused-vars
  loginWithProvider(_provider, _returnTo) {
    // Social login needs an OAuth app (client id/secret) configured on the
    // backend — not included in this migration. See README "Login com
    // Google" for what to add if you want to wire this up.
    throw new Error("Login com Google ainda não está configurado neste projeto.");
  },

  setToken,
  getToken,

  async me() {
    return request("/me", { auth: true });
  },

  logout() {
    setToken(null);
  },
};
