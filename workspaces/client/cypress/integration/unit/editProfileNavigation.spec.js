import {generateName,generatePassword} from '../../support/utils';

describe('Test', function(){

    it('sign up', function(){

        cy.visit('localhost:3000');
        cy.get('input[name="mailid"]').type(generateName()+'@gmail.com');
        cy.get('input[name="password"]').type(generatePassword());
        cy.get('button').contains('Sign In').click();
        cy.intercept('POST','http://localhost:4000/login',{"approved": true});
        cy.intercept('POST','/getProducts',{"Products":[]});
        cy.location('pathname').should('eq', '/home')
        cy.get('a').contains('Profile').click();
        cy.get('.dropdown-menu').children().should('have.length',2);

    });

});