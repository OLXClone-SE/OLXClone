describe('Navigating to login page', () => {
    it('Visits the login page on entering website URL', () => {
      cy.visit('localhost:3000');
      cy.location('pathname').should('eq', '/')
    })
  })