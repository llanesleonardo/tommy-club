import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "./public/",
    emptyOutDir: true,
  },
  base: "https://digitalbusiness2.gitlab.io/tommy/",
});
