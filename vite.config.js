import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  base: "/",
  build: {
    // Three.js is isolated to the lazy hero chunk and is about 134 kB gzipped.
    chunkSizeWarningLimit: 550,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
