import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Explicitly allow access to variables starting with VITE_
  envPrefix: 'VITE_',
})
