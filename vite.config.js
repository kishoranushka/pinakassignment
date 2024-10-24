import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pinakassignment/",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },
});
