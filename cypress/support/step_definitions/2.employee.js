function generate_random_string(string_length) {
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

Given("I am on the employees page", () => {
    cy.location('pathname').should('eq', '/employees');
});
 
Then("the employee page components are displayed correctly", () => {
    cy.get('#bAdd').should('not.be.disabled');
    cy.get('#bEdit').should('have.class','disabled');
    cy.get('#bDelete').should('have.class','disabled');
    cy.get('#employee-list').should('be.visible');
});

When("I click create button", () => {
    cy.get('#bAdd').click();
});

And("I click add button", () => {
    cy.get('.formFooter > [ng-show="isCreateForm"]').click({force:true});
});

When("I click cancel button", () => {
    cy.get('body').contains('Cancel').click();
});

Then("error messages are displayed for fields", () => {
    cy.get('fieldset').find('input[ng-model="selectedEmployee.firstName"]').should('have.class',"ng-pristine ng-invalid ng-invalid-required").type('a').should('have.class',"ng-dirty ng-valid ng-valid-required");
    cy.get('fieldset').find('input[ng-model="selectedEmployee.lastName"]').should('have.class',"ng-pristine ng-invalid ng-invalid-required").type('a').should('have.class',"ng-dirty ng-valid ng-valid-required");
    cy.get('fieldset').find('input[ng-model="selectedEmployee.startDate"]').should('have.class',"ng-pristine ng-invalid ng-invalid-required").type('2020-01-01').should('have.class',"ng-dirty ng-valid-required ng-valid ng-valid-pattern");
    cy.get('fieldset').find('input[ng-model="selectedEmployee.email"]').should('have.class',"ng-pristine ng-invalid ng-invalid-required ng-valid-email").type('user@email.com').should('have.class',"ng-dirty ng-valid-required ng-valid ng-valid-email");
    cy.get('body').contains('Cancel').click();
});

var firstname = generate_random_string(5);
var lastName = generate_random_string(5);
var email = firstname+'.'+lastName+'@email.com';
var date = '2020-01-01';
var id = () => Cypress._.random(50000, 80000)
And("I enter the required details", () => {
    cy.get('fieldset').find('input[ng-model="selectedEmployee.firstName"]')
    .type(firstname);
    cy.get('fieldset').find('input[ng-model="selectedEmployee.lastName"]')
    .type(lastName);
    cy.get('fieldset').find('input[ng-model="selectedEmployee.startDate"]')
    .type(date);
    cy.get('fieldset').find('input[ng-model="selectedEmployee.email"]')
    .type(email);
});
var employee = firstname+' '+lastName;
And("the employee is displayed in the list", () => {
    cy.get('#employee-list').contains(employee).should('be.visible');
});

When("I double-click the employee I created", () => {
    cy.get('#employee-list').contains(employee).dblclick();
});
Then("the edit employee page is displayed", () => {
    cy.location('pathname').should('include', '/edit');
    cy.get('body').contains('Back').should('be.visible');
    cy.get('body').contains('Update').should('be.visible');
    cy.get('body').contains('Delete').should('be.visible');
    cy.get('fieldset').find('input[ng-model="selectedEmployee.firstName"]')
    .invoke('val').should('eq',firstname);
    cy.get('fieldset').find('input[ng-model="selectedEmployee.lastName"]')
    .invoke('val').should('eq',lastName);
    cy.get('fieldset').find('input[ng-model="selectedEmployee.startDate"]')
    .invoke('val').should('eq',date);
    cy.get('fieldset').find('input[ng-model="selectedEmployee.email"]')
    .invoke('val').should('eq',email);
});
When("I select the employee I created", () => {
    cy.get('#employee-list').contains(employee).click();
});
And("I click edit button", () => {
    cy.get('body').contains('Edit').click();
});
And("I click back button", () => {
cy.wait(500);
cy.get('body').contains('Back').click();
});
And("I update employee details", () => {
    firstname += '_upd';
    cy.get('fieldset').find('input[ng-model="selectedEmployee.firstName"]').clear().type(firstname);
    lastName += '_upd';
    cy.get('fieldset').find('input[ng-model="selectedEmployee.lastName"]').clear().type(lastName);
    date = '2013-12-11';
    cy.get('fieldset').find('input[ng-model="selectedEmployee.startDate"]').clear().type(date);
    email = firstname+'.'+lastName+'@email.com';
    cy.get('fieldset').find('input[ng-model="selectedEmployee.email"]').clear().type(email);
    cy.get('body').contains('Update').click();
});
And("the employee details are updated", () => {
    employee = firstname+' '+lastName;
    cy.get('#employee-list').contains(employee).dblclick();
    cy.get('fieldset').find('input[ng-model="selectedEmployee.firstName"]')
    .invoke('val').should('eq',firstname);
    cy.get('fieldset').find('input[ng-model="selectedEmployee.lastName"]')
    .invoke('val').should('eq',lastName);
    cy.get('fieldset').find('input[ng-model="selectedEmployee.startDate"]')
    .invoke('val').should('eq',date);
    cy.get('fieldset').find('input[ng-model="selectedEmployee.email"]')
    .invoke('val').should('eq',email);
    cy.wait(500);
    cy.get('body').contains('Back').click();
});
When("I click delete button", () => {
    cy.get('body').contains('Delete').click();
});
Then("the employee is deleted from the list", () => {
    cy.get('#employee-list').contains(employee).should('not.exist');
});