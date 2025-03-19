import { Page, Locator } from '@playwright/test';
import { basePage } from './BasePage';

export class ApplicationPage extends basePage {
  readonly loanAmount: Locator;
  readonly continue: Locator;
  readonly loanPeriod:Locator;
  readonly loanUse: Locator;
  readonly applicantTitle: Locator;
  readonly applicantFirstName: Locator;
  readonly applicantLastName: Locator;
  readonly applicantDOB: Locator;
  readonly applicantEmail: Locator;
  readonly applicantPhone: Locator;
  
  constructor(page: Page) {
    super(page);
    this.loanAmount = page.locator('//input[@name="loanAmount"]');
    this.continue = page.locator('#continue-button');
    this.loanPeriod = page.locator('//button[text()=" 3 months"]');
    this.loanUse = page.locator('//button[text()=" Home improvements"]');
    this.applicantTitle = page.locator('//button[text()=" Mr"]');
    this.applicantFirstName = page.locator('#firstName');
    this.applicantLastName = page.locator('#lastName');
    this.applicantDOB = page.locator('#dateOfBirth');
    this.applicantEmail = page.locator('#emailAddress');
    this.applicantPhone = page.locator('#mobileNumber');
  }

  async navigateToHomePage() {
    await this.navigateTo();
  }
   
  async inputLoanAmount(amount: string) {
    await this.loanAmount.fill(amount);
  }

  async clickContinue() {
    await this.continue.click();
  }

  async selectLoanPeriod() {
    await this.loanPeriod.click();
  }

  async selectLoanUse() {
    await this.loanUse.click();
  }

  async selectApplicantTitle(title: string) {
    await this.applicantTitle.click();
  }

  async inputApplicantFirstNameAndLastName(firstName: string, lastName: string) {
    await this.typeSlowly(this.applicantFirstName, firstName);
    await this.typeSlowly(this.applicantLastName, lastName);
    await this.applicantLastName.press('Tab');
  }

  async inputApplicantDOB(dob: string) {
    await this.applicantDOB.fill(dob);
  }

  async inputApplicantEmail(email: string) {
    await this.applicantEmail.fill(email);
  }

  async inputApplicantPhone(phone: string) {
    await this.typeSlowly(this.applicantPhone, phone);
  }
}