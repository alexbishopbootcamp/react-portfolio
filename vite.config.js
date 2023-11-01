import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import TailwindCSS from 'tailwindcss';
import Autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss:{
      plugins: [
        TailwindCSS,
        Autoprefixer,
      ]
    }
  }
})
