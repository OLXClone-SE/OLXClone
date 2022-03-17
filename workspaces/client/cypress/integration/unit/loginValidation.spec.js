import {generateName,generatePassword} from '../../support/utils';

describe('Navigating to login page', () => {
    it('Visits the login page on entering website URL', () => {
      cy.visit('localhost:3000');
      cy.get('input[name="mailid"]').type(generateName()+'@gmail.com');
      cy.get('input[name="password"]').type(generatePassword());
      cy.get('button').contains('Sign In').click();
      cy.intercept('POST','http://localhost:4000/login',{"approved": true});
      cy.intercept('POST','/getProducts',{"Products":[]});
      cy.location('pathname').should('eq', '/home')
    })
  })