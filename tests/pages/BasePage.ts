import { Page, Locator } from '@playwright/test';

export class basePage {
  private page: Page;
 
  constructor(page: Page) {
    this.page = page;
  }
  
  async navigateTo() {
    await this.page.goto('https://money.monevo.co.uk/');
  }

  async waitFor(time: number) {
    await this.page.waitForTimeout(time);
  }

  async typeSlowly(locator: Locator, text: string) {
    for (const char of text) {
        await locator.press(char, { delay: 500 });
    }
  }
}