import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "vue-router/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter({}), Vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ["global-builtin", "import"], // silence bootstrap5 related deprecations
      },
    },
  },
});
