import react from '@vitejs/plugin-react'
import { defineConfig, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  let config: UserConfig = {
    plugins: [react()]
  };

  if (mode === "dev") {
    config = {
      ...config,
        server: {
          proxy: {
            "/api": {
              target: "https://server.revcn.net",
              changeOrigin: true,
              secure: false
            }
          }
        }
    }
  }

  return config;
})
