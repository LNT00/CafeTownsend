Then("the login page is displayed correctly", () => {
    cy.location().should((loc) => {
        expect(loc.protocol).to.eq('http:')
        //expect(loc.hostname).to.eq('cafetownsend-angular-rails.herokuapp.com')
        expect(loc.pathname).to.eq('/login')        
      })
    cy.get('fieldset').then((loginform) => {
      cy.get(loginform).find('input[ng-model="user.name"]').should('be.visible')
      cy.get(loginform).find('input[ng-model="user.password"]').should('be.visible')
      cy.get(loginform).find('button[class="main-button"]').should('be.visible')
    })
});

Given("I am on the login page", () => {
    cy.location('pathname').should('eq', '/login');
});
And("the login fields are cleared", () => {
    cy.get('fieldset').then((loginform) => {
        cy.get(loginform).find('input[ng-model="user.name"]').invoke('val').should('be.empty')
        cy.get(loginform).find('input[ng-model="user.password"]').invoke('val').should('be.empty')
    })
});