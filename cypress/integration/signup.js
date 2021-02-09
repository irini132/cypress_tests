let user;

describe('registartion with faker', () => {
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it('Register with faker', () => {
      cy.visit('https://react-redux.realworld.io/#/register');
      
      cy.get(':nth-child(1) > .form-control').type(user.username);
      cy.get(':nth-child(2) > .form-control').type(user.email);
      cy.get(':nth-child(3) > .form-control').type(`123456789`);
      cy.get('.btn').click();
      cy.get('.navbar').contains(user.username).should('exist');
    });
  });