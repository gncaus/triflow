// Builds the frontend with the GitHub Pages base path and publishes dist/ to
// the `gh-pages` branch of this repo's `origin` remote.
//
// GitHub Pages has no server, so this ships a static-only preview: the
// Home/SportTraining pages work fully, but Login/Register/etc. will show a
// network error on submit (no backend to call). See README "Deploy" for how
// to add a real backend later.
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import ghpages from "gh-pages";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

console.log("Building with GH_PAGES base path...");
execSync("npx vite build", { cwd: root, stdio: "inherit", env: { ...process.env, GH_PAGES: "1" } });

// SPA fallback: GitHub Pages has no server-side rewrites, so a direct visit
// to e.g. /esporte/corrida 404s unless GitHub Pages itself is told to serve
// index.html for unknown paths. The classic trick: serve the same app shell
// as 404.html too — React Router then takes over client-side once it loads.
fs.copyFileSync(path.join(distDir, "index.html"), path.join(distDir, "404.html"));

// Stop GitHub Pages' default Jekyll processing from touching the build output.
fs.writeFileSync(path.join(distDir, ".nojekyll"), "");

console.log("Publishing dist/ to the gh-pages branch...");
ghpages.publish(
  distDir,
  { dotfiles: true, message: "Deploy: " + new Date().toISOString() },
  (err) => {
    if (err) {
      console.error("Deploy failed:", err);
      process.exit(1);
    }
    console.log("Deployed. If this is the first deploy, enable Pages once:");
    console.log("  GitHub repo -> Settings -> Pages -> Source: 'gh-pages' branch, folder '/ (root)'.");
  }
);
