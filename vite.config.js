import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub user pages (username.github.io), no base option is needed
export default defineConfig({
  plugins: [react()],
  // base: "/", // Not needed for user/organization pages
});
