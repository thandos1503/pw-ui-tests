import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { FormulaOnePage } from '../pages/FormulaOnePage';
import { ResultsPage } from '../pages/ResultsPage';

let homePage: HomePage;
let formulaOnePage: FormulaOnePage;
let resultsPage: ResultsPage;

Given('I am on the BBC Sport Formula page', async function () {
  homePage = new HomePage(this.page);
  formulaOnePage = new FormulaOnePage(this.page);
  resultsPage = new ResultsPage(this.page);
  
  await homePage.navigateToHomePage();
});

When('I Click Formula 1 Link in Menu', async function () {
  await homePage.clickMenuFormulaOne();
});

When('I select the Results link', async function () {
  await formulaOnePage.clickResultsLink();
});

When('I select {string} and {string}', async function (year: string, date: string) {
  await resultsPage.selectYearAndDate(year, date);
});

When('I select third winner result', async function () {
  await resultsPage.selectThirdWinner();
});

Then('the result should be displayed', async function () {
  await resultsPage.isResultVisible()
});

