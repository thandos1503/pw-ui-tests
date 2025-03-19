import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ApplicationPage } from '../pages/ApplicationPage';

let applicationPage: ApplicationPage;


Given('I am on the homepage page', async function () {
  applicationPage = new ApplicationPage(this.page);
  
  await applicationPage.navigateToHomePage();
});

When('I enter the loan amount {string}', async function (amount: string) {
 await applicationPage.inputLoanAmount(amount);
 await applicationPage.clickContinue();
});

When('I select the Loan Period', async function () {
  await applicationPage.selectLoanPeriod();
});

When('I select the loan purpose', async function () {
  await applicationPage.selectLoanUse();
});

When('I enter the my title', async function () {
  await applicationPage.selectApplicantTitle('Mr');
  await applicationPage.clickContinue();
});

When('I enter my {string} and {string}', async function (firstName: string, lastName: string) {
  await applicationPage.inputApplicantFirstNameAndLastName(firstName, lastName);
  await applicationPage.clickContinue();
});


When('I provide my date of birth as {string}', async function (DOB: string) {
  await applicationPage.inputApplicantDOB(DOB);
  await applicationPage.clickContinue();
});


When('I input my email address {string}', async function (email: string) {
    await applicationPage.inputApplicantEmail(email);
    await applicationPage.clickContinue();
});


When('I submit my contact number {string}', async function (phone: string) {
  await applicationPage.inputApplicantPhone(phone);
  await applicationPage.clickContinue();
});


Then('The error message should not appear', async function () {
  await expect(this.page.locator('//div[text()="Enter a valid UK mobile phone number"]')).not.toBeVisible();
});

Then('The error message should appear', async function () {
  await expect(this.page.locator('//div[text()="Enter a valid UK mobile phone number"]')).toBeVisible();
});

