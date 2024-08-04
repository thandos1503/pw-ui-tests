import { Page, Locator, expect } from '@playwright/test';
import { getMappedItem } from '../support/fixture';

export class ResultsPage {
  private page: Page;
  readonly datePicker: Locator;
  private gameDate: string;
  private name: any;
  
  constructor(page: Page) {
    this.page = page;
    this.name = "";
    this.gameDate = "";
    this.datePicker = page.getByTestId('datepicker-dates').getByTestId('datepicker-date-value');
  }
   
  async selectYearAndDate(year: string, date: string) {
    this.gameDate = date;
    const gameResults = this.page.locator('//h2//button//div//span[text()="'+date+'"]');

    await getMappedItem(this.datePicker.getByText(year), year);

    await this.page.waitForTimeout(5000);
    await getMappedItem(gameResults, date);
  }

  async selectThirdWinner() {
    const gameResults = this.page.locator('//h2//button//div//span[text()="'+this.gameDate+'"]/following::table[1]//tbody//tr'); 
    const rowCount = await gameResults.count();
        
    for (let i = 0; i < rowCount; i++) {
      if (i === 2){
        const row = gameResults.nth(i);
        this.name = await row.locator('td:nth-child(2)').textContent();
        console.log(`This is the 3rd winner: ${this.name.substring(0, this.name.length - 3)}`);
        break;
      }
    }
  }
  
  async isResultVisible() {
    expect(this.name).not.toBeNull;
  }
}