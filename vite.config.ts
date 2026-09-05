import { defineConfig } from "@tanstack/react-start/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    plugins: [
      react(),
      tailwindcss(),
      tsConfigPaths({
        root: "./",
      }),
    ],
  },
});
