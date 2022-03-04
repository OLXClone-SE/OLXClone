describe('Navigating to signup page on clicking signup link', () => {
    it('Visits the signup page on link click', () => {
      cy.visit('localhost:3000');
      cy.get('a').contains('Sign Up').click();
      cy.location('pathname').should('eq', '/signup')
    })
  })