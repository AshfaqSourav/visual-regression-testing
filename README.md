# 🎯 Visual Regression Testing Framework

This project provides a fully automated **visual regression testing pipeline** using:

- ✅ [Playwright](https://playwright.dev/) for browser automation
- ✅ Screenshots from your **live web app**
- ✅ Baseline UI designs exported directly from **Figma**
- 🧪 Playwright report

---

## 🚀 Features

- Baseline screenshots pulled via Figma API
- Screenshot actual production pages
- Side-by-side **Expected / Actual / Diff / side by side/Slider** in playwright report
- Scroll-to-bottom support for full content rendering
- Modular structure for easy reuse across multiple pages/modules/devices

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js v18+](https://nodejs.org/en/download/)
- Git
- A Figma personal access token (for downloading design Pages)

---

## 🔧 Project Setup

After cloning the repo:

```bash
git clone https://github.com/AshfaqSourav/visual-regression-testing.git
cd visual-regression-testing

```Install dependencies
npm install

```Install Playwright browsers:
npx playwright install

```Add .env file
npm install dotenv
Add a file with .env
Add FIGMA_TOKEN ,FIGMA_FILE_KEY,URL

npm install node-fetch

```Run a Visual Test
npx playwright test

``` open the HTML report directly after test run:
start diff_output/report.html     # On Windows
open diff_output/report.html      # On macOS



📂 Folder Structure

visual-regression-testing/
├── playwright.config.js
├── tests/
│   ├── visual.spec.js
│   └── __snapshots__/
│       └── visual.spec.js-snapshots/
│           └── paystation  ← ✅ your  images are inside here
├── utils/
│   └── scrollUtils.js



1️⃣ Add a frame in Figma
Get the fileKey and nodeId of your frame

ADD node in figma.config.js:

nodes: {
  paystation: '5214:24158',

}
2️⃣ Download screenshot
npm run
npm run figma:download
This creates: tests/__snapshots__/visual.spec.js-snapshots/paystation
