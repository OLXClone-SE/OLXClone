import {generateName,generatePassword,genereatePhoneNumber} from '../../support/utils';

describe('signUpVerification', function(){

    it('sign up', function(){

        cy.visit('http://localhost:3000');
        cy.get('a').contains('Sign Up').click();
        cy.location('pathname').should('eq', '/signup')
        cy.get('input[name="fname"]').type(generateName());
        cy.get('input[name="lname"]').type(generateName());
        cy.get('input[name="mailid"]').type(generateName()+'@gmail.com');
        cy.get('input[name="phone"]').type('1'+genereatePhoneNumber(9));
        cy.get('input[name="password"]').type(generatePassword());
        cy.get('button').contains('Sign Up').click();
        cy.location('pathname').should('eq', '/verify');
    });

});