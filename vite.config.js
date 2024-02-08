import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

import VueRouter from "unplugin-vue-router/vite";
import Vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter({}), Vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
        usePolling: true
    }
  },
});
