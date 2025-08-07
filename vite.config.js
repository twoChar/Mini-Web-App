// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Mini-Web-App/', // 👈 match exactly what your repo is named
  plugins: [react()],
})
