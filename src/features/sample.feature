Feature: API Testing with Playwright

  Scenario: Validate API response
    Given I set the API endpoint to "/users"
    When I make a GET request
    Then the response status should be 200
    And the response should contain a list of users