Given("I open the login page", () => {
    cy.visit("http://cafetownsend-angular-rails.herokuapp.com/login");
});

And("I am logged in as {word} user", (user) => {
    cy.loginuser(user);
  });
Then("the employees page is displayed", () => {
    cy.location('pathname').should('eq', '/employees');
    cy.contains('Hello').should('be.visible');
    cy.get('#greetings').should('be.visible');
    cy.get('#employee-list').should('be.visible');
});
Then("the login page is displayed", () => {
    cy.location('pathname').should('eq', '/login');
  });
   
When("I click logout button", () => {
    cy.get('body').contains('Logout').click();
  });