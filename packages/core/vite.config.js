const path = require("path");
const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    outDir: "./lib",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "RpUniverseCore",
      formats: ['es'],
      fileName: (format) => `core.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});