import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
 
  base: '/vue3-learn/', // Replace 'your-repo-name' with your GitHub repository name

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
