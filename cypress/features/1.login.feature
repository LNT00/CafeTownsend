Feature: Login page

Scenario: Open login page and check it's displayed correctly
    Given I open the login page
    Then the login page is displayed correctly

Scenario: Logout clears the login fields
    Given I am on the login page
    And I am logged in as Luke user
    When I click logout button
    Then the login page is displayed
    And the login fields are cleared