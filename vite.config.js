import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     /* each time the route starts with "/api", add VITE_REACT_APP_BACKEND_URL or
  //       "http://localhost:3000" at the beginning */
  //     "/api": {
  //       target: "http://localhost:3000",
  //       secure: false,
  //     },
  //   },
  // },
  plugins: [react()],
});
