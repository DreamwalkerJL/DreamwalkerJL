import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'assets',
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
