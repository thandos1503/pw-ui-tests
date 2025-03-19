Feature: PhoneNumberValidation

  Scenario Outline: Verify that user phone number is Validation pass wehen a correct number is entered
    Given I am on the homepage page
    And I enter the loan amount "1000"
    And I select the Loan Period
    And I select the loan purpose
    And I enter the my title
    And I enter my "samson" and "gidion"
    And I provide my date of birth as <DOB>
    And I input my email address <Email>
    And I submit my contact number <PhoneNumber>
    Then The error message should not appear

    Examples:
  |DOB         |Email                  |PhoneNumber  |
  |"12/10/1982"|"thandos1503@gmail.com"|"07500000000"|