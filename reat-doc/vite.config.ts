import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // For hot reloading. When change local file docker container source code will change auto
    watch: {
      usePolling: true,
    },
  },
});
