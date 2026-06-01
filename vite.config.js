import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative asset paths so the app works when deployed to Netlify
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
