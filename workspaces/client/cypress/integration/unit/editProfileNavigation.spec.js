beforeEach(()=>{
    cy.login()
    })
    
describe('Navigate to profiles', function(){

    it('Clicking Edit Profile should open profile page', function(){
        cy.intercept('POST','/getProducts',{"Products":[]});
        cy.get('a').contains('Profile').click();
        cy.get('.dropdown-menu').children().should('have.length',2);

    });

});