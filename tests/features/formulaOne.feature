Feature: Formula Results

  Scenario: Verify that user can select the 3rd winner in a race result
    Given I am on the BBC Sport Formula page
    And I Click Formula 1 Link in Menu
    When I select the Results link
    And I select "2023" and "19 November 2023"
    And I select third winner result
    Then the result should be displayed