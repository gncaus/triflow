// Minimal JSON-file user store. Fine for local dev / a small single-instance
// deployment, but it has no concurrency control — swap for a real database
// (Postgres, SQLite, Mongo...) before relying on this for serious production
// traffic or before scaling to more than one server instance.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "data", "users.json");

function ensureDb() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, JSON.stringify({ users: [] }, null, 2));
}

export function readDb() {
  ensureDb();
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

export function writeDb(data) {
  ensureDb();
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}
