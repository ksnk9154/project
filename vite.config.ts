import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 3000,
    open: true,
    // 👇 This line allows Render’s public domain to access the app
    allowedHosts: ['.onrender.com'], 
  },
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 3000,
    // 👇 Same here
    allowedHosts: ['.onrender.com'], 
  },
})
