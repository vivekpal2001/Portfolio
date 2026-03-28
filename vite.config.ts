import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Setting base to the repository name for correct GitHub Pages deployment padding
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Allows using '@' to import starting from the project root
      '@': path.resolve(__dirname, '.'),
    },
  },
});
