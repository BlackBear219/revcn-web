import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "https://www.revcn.net",
    // host: "localhost",
    proxy: {
      "/api": {
        target: "https://revcn.azurewebsites.net",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
