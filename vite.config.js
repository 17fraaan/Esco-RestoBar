import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: false
    }
  },
  build: {
    outDir: 'dist'
  }
})
