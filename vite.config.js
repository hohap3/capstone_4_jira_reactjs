import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      HOCS: `${path.resolve(__dirname, "./src/HOCS/")}`,
      routes: `${path.resolve(__dirname, "./src/routes/")}`,
      utils: `${path.resolve(__dirname, "./src/utils/")}`,
      styles: `${path.resolve(__dirname, "./src/styles/")}`,
      schemas: `${path.resolve(__dirname, "./src/schemas/")}`,
      thunks: `${path.resolve(__dirname, "./src/thunks/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      layouts: `${path.resolve(__dirname, "./src/layouts/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      constants: `${path.resolve(__dirname, "./src/constants/")}`,
      API: `${path.resolve(__dirname, "./src/API/")}`,
      config: `${path.resolve(__dirname, "./src/config/")}`,
      reduxs: `${path.resolve(__dirname, "./src/reduxs/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
    },
  },
});
