import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true, // This ensures the host header is changed to the target URL
        secure: false,
      },
    },
  },

  plugins: [react()],
});
