import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Dev-only: proxies /api to the local Express server (see server/index.js)
// so the frontend can call same-origin relative paths in both dev and prod.
export default defineConfig({
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
