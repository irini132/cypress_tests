it ('Signin flow', () =>{
  cy.visit('https://react-redux.realworld.io/#/login')

  cy.get(':nth-child(1) > .form-control').type('testest1@gmail.com')
  cy.get(':nth-child(2) > .form-control').type('123456789')

  cy.get('.btn').click()

  cy.get('.navbar').contains('testest11').should('exist')

})
