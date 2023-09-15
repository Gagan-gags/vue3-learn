import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // /vue3-learn
  publicPath: process.env.NODE_ENV === "prod" ? "/vue3-learn/" : "/",

  plugins: [
    vue(),
  ],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
    
  },
  build: {
    outDir: "prod",
    emptyOutDir: true,
  },
})
