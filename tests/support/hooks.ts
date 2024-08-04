import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

setDefaultTimeout(120000);

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();
  (this as any).page = page;
});

After(async function () {
  await browser.close();
});