import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Dev-only: proxies /api to the local Express server (see server/index.js)
// so the frontend can call same-origin relative paths in both dev and prod.
export default defineConfig({
  // GitHub Pages serves this repo from /<repo-name>/, not from the domain
  // root, so asset URLs need that prefix baked in. Vercel/Railway/etc. serve
  // from the root, so base stays "/" there. Set GH_PAGES=1 only for the
  // `npm run deploy:gh-pages` script.
  base: process.env.GH_PAGES ? "/triflow/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target:
          process.env.VITE_API_PROXY_TARGET ||
          `http://localhost:${process.env.API_PORT || 4000}`,
        changeOrigin: true,
      },
    },
  },
});
