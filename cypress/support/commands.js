Cypress.Commands.add('loginuser', (user) => {
    cy.fixture('users').then((userFixture) => {
        cy.get('body').find('input[ng-model="user.name"]').clear().type(userFixture[user].username);
        cy.get('body').find('input[ng-model="user.password"]').clear().type(userFixture[user].password);
    });
    cy.get('body').find('button[class="main-button"]').click();
});