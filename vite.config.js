import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HAIRCRAFT-UNISEX-SALON/',
  server: {
    port: 5173
  }
})
