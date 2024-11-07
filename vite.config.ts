import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]__[hash:base64:2]"
    }
  },
  resolve: {
    alias: {
      src: "/src"
    }
  },
  server: {
    https: true,
    port: 3000
  }
});
