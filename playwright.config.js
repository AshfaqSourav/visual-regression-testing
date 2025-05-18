import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90000,
  reporter: 'html',
  snapshotPathTemplate: '{testDir}/__snapshots__/{testFileName}-snapshots/paystation/{arg}.png',
  expect: {
    timeout: 20000,
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.02,
      maxDiffPixels: 200,
      threshold: 0.3,
    },
  },
  use: {
    headless: false,
    viewport: null, // Let tests define their own viewport
    launchOptions: {
      args: ['--start-maximized'], // Only works in headless: false mode
    },
  },
});
