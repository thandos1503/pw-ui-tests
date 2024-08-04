import { Page, Locator } from '@playwright/test';

export class FormulaOnePage {
  private page: Page;
  readonly menuResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuResult = page.getByRole('link', { name: 'Results' });
  }
  
  async clickResultsLink() {
    await this.menuResult.click();
  }
}