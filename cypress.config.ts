import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    supportFile: "'cypress/support/e2e.{js,jsx,ts,tsx}'",
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
