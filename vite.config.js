import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/timireinigung/' : '/',  // ✅ works locally & on Pages
})
