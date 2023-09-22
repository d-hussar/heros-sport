import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/heros-sport/",
  esbuild: {
    loader: "tsx",
    include: [
      // Business as usual for .jsx and .tsx files
      "src/**/*.tsx",
      "node_modules/**/*.tsx",
    ],
  },
  plugins: [react()],
});
