import { test, expect } from '@playwright/test';
import { scrollPage } from '../utils/scrollUtils.js';

import dotenv from 'dotenv';

dotenv.config();

const baseUrl = `${process.env.BASEURL}/paystation`;

const viewports = {
  paystationDesktop: { width: 1815, height: 1080 },
  paystationLaptop: { width: 1455, height: 1080 },
  paystationTablet: { width: 783, height: 1080 },
  paystationMobile: { width: 375, height: 1080 },
};

for (const [name, viewport] of Object.entries(viewports)) {
  test(`Visual regression - ${name}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await scrollPage(page);
    console.log(`Viewport for ${name}:`, await page.viewportSize());

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(`${name}Figma.png`);
  });
}
