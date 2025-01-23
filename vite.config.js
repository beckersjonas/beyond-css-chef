import { resolve } from "path"
import { defineConfig } from "vite"
import pluginPurgeCss from "vite-plugin-purgecss-updated-v5"

export default defineConfig({
  root: resolve(__dirname, "src/"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
      },
    },
  },
  plugins: [pluginPurgeCss()],
})
