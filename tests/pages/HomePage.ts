import { Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;
  readonly menuFormulaNav: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuFormulaNav = page.getByTestId('navigation').getByRole('link', { name: 'Formula' });
  }
  
  async navigateToHomePage() {
    await this.page.goto('https://www.bbc.com/sport', { waitUntil: 'domcontentloaded'});
  }

  async clickMenuFormulaOne() {
    await this.menuFormulaNav.click();
  }
  
}