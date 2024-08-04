import { Page, Locator, expect } from '@playwright/test';

export class SearchPage {
  private page: Page;
  readonly search: Locator;
  readonly btnSearch: Locator;
  readonly txtSearch: Locator;
  readonly firstText: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.search = page.getByRole('button', { name: 'Search'})
    this.btnSearch = page.getByRole('link', { name: 'Search BBC' });
    this.txtSearch = page.getByPlaceholder('Search the BBC');
    this.firstText = page.locator('xpath=//*[@data-testid="default-promo"]//a/following-sibling::p');
  }

  async clickSearchButton() {
    await this.btnSearch.click();
  }

  async fillSearchField(search: string) {
    await this.txtSearch.fill(search);
    await this.search.click();
  }

  async displayReturnedText() {
    expect(this.firstText.first()).toBeTruthy();
    let returnValue = this.firstText.first();
    console.log(await returnValue.textContent());
  }
}