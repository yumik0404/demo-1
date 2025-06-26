import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.pdf'],
});
