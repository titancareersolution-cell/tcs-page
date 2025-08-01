import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Environment variables are automatically loaded from .env files
  // You can access them in your code using import.meta.env.VITE_*
})
