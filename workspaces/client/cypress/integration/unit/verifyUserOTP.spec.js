import {generateName,generatePassword,genereatePhoneNumber,generateOTP} from '../../support/utils';

describe('signUpVerification', function(){

    it('validate user otp', function(){

        cy.visit('http://localhost:3000');
        cy.get('a').contains('Sign Up').click();
        cy.location('pathname').should('eq', '/signup')
        cy.get('input[name="fname"]').type(generateName());
        cy.get('input[name="lname"]').type(generateName());
        cy.get('input[name="mailid"]').type(generateName()+'@gmail.com');
        cy.get('input[name="phone"]').type('1'+genereatePhoneNumber(9));
        cy.get('input[name="password"]').type(generatePassword());
        cy.get('button').contains('Sign Up').click();
        cy.location('pathname').should('eq', '/verify')
        cy.get('input[name="otp"]').type(generateOTP(4));
        cy.get('button').contains('Validate OTP').click();
        cy.intercept('POST','http://localhost:4000/verifyuser',{"approved" : true});
        cy.location('pathname').should('eq', '/')

    });

});