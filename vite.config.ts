import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/yusuftopal61/',   // <<<<<<<<<< hier je subpath toevoegen
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    vue(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));