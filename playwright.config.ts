import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true, // Runs tests in headless mode
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', // Take screenshots if a test fails
    trace: 'retain-on-failure' // Debugging trace for failed tests
  },
  reporter: [['html', { outputFolder: 'reports' }]] // Generates an HTML test report
});
