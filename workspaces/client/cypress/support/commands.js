// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {generateName,generatePassword} from './utils';

Cypress.Commands.add('login', (username, password) => {
    cy.visit('localhost:3000');
    cy.get('input[name="mailid"]').type(generateName()+'@gmail.com');
    cy.get('input[name="password"]').type(generatePassword());
    cy.get('button').contains('Sign In').click();
    cy.intercept('POST','http://localhost:4000/login',{"approved": true});
    cy.location('pathname').should('eq', '/home')
  })