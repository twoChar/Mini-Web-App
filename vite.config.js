// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mini-web-app/', // 👈 this is required for GitHub Pages to work properly
  plugins: [react()],
})
