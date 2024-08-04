import { When, Then } from '@cucumber/cucumber';
import { SearchPage } from '../pages/SearchPage';

let searchPage: SearchPage;

When('I Click the search button', async function () {

  searchPage = new SearchPage(this.page);

  await searchPage.clickSearchButton();
});

When('I search for {string}', async function (searchQuery: string) {
  await searchPage.fillSearchField(searchQuery);
 });

Then('I output the test of the first returned video', async function () {
  await searchPage.displayReturnedText();
});