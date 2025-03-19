import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, Page } from '@playwright/test';

setDefaultTimeout(40000);

let browsers: Browser[] = [];
let pages: Page[] = [];

Before(async function () {
  const browserTypes = [chromium, firefox, webkit];
  for (const browserType of browserTypes) {
    const browser = await browserType.launch({ headless: false });
    const page = await browser.newPage();
    browsers.push(browser);
    pages.push(page);
    (this as any).page = page;
  }
});

After(async function () {
  for (const browser of browsers) {
    await browser.close();
  }
});