import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Required for GitHub Pages:
  // https://jaybabariya1612.github.io/Jay-portfolio/
  base: '/Jay-portfolio/',

  server: {
    port: 3000,
    open: false,
    host: true,
  },
});