beforeEach(()=>{
    cy.login()
    })

describe('Navigate to profiles', function(){

    it('Clicking logout should logout user and prompt for login', function(){
        cy.intercept('POST','/getProducts',{"Products":[]});
        cy.get('a').contains('Profile').click();
        cy.get('a').contains('Logout').click();
        cy.location('pathname').should('eq', '/')
    });

});