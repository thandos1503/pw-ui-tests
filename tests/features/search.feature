Feature: Search

  Scenario Outline: Verify user can search for an article ad display sub text
    Given I am on the BBC Sport Formula page
    And I Click the search button
    When I search for <search> 
    Then I output the test of the first returned video

    Examples:
     |search|
     |"Sport in 2023"|