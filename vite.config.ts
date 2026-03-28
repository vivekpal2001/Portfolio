import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Since you are using a custom domain, the base MUST be the root path ('/')
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Allows using '@' to import starting from the project root
      '@': path.resolve(__dirname, '.'),
    },
  },
});
