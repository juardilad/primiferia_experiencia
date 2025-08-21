import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/primiferia_experiencia/',  // 👈 el nombre EXACTO de tu repo
  build: {
    outDir: 'dist',
  }
})
