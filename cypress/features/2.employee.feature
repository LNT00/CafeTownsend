Feature: Employees page

Scenario: Login to application
    Given I open the login page
    And I am logged in as Luke user
    Then the employees page is displayed

Scenario: Page elements are displayed correctly on employees page
    Given I am on the employees page
    Then the employee page components are displayed correctly

Scenario: User cannot add an employee without entering all details
    Given I am on the employees page
    When I click create button
    And I click add button
    Then error messages are displayed for fields

Scenario: User can add an employee
    Given I am on the employees page
    When I click create button
    And I enter the required details
    And I click add button
    Then the employees page is displayed 
    And the employee is displayed in the list

Scenario: Cancel adding employee works correctly
    Given I am on the employees page
    When I click create button
    And I click cancel button
    Then the employee is displayed in the list

Scenario: User can view employee details by double-click
    Given I am on the employees page
    When I double-click the employee I created
    Then the edit employee page is displayed
    And I click back button

Scenario: User can edit an employee from Edit button
    Given I am on the employees page
    When I select the employee I created
    And I click edit button
    Then the edit employee page is displayed
    And I click back button

Scenario: User can update employee details
    Given I am on the employees page
    And I select the employee I created
    When I click edit button
    And the edit employee page is displayed
    And I update employee details
    Then the employees page is displayed
    And the employee details are updated

Scenario: User can delete an employee from employee list page
    Given I am on the employees page
    And I select the employee I created
    When I click delete button
    Then the employee is deleted from the list

Scenario: User can add another employee
    Given I am on the employees page
    When I click create button
    And I enter the required details
    And I click add button
    Then the employees page is displayed 
    And the employee is displayed in the list

Scenario: User can delete an employee from employee edit page
    Given I am on the employees page
    When I select the employee I created
    And I click edit button
    And I click delete button
    When I click delete button
    Then the employees page is displayed 
    And the employee is deleted from the list

Scenario: Logout from application
    Given I am on the employees page
    When I click logout button
    Then the login page is displayed