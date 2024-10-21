import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pinakassignment/", // Use your repo name here
  root: "src",
  build: {
    outDir: "../dist",
  },
});
