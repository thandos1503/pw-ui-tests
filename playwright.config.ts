import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [['html'], ['json', { outputFile: 'test-results/report.json' }]],
});
