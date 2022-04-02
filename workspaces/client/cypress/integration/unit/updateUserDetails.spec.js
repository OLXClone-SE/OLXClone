beforeEach(()=>{
    cy.login()
    })
    
describe('Update User Details', function(){

    it('On clicking save profile', function(){
        cy.intercept('POST','/getProducts',{"Products":[]});
        cy.get('a').contains('Profile').click();
        cy.get('.dropdown-menu').children().should('have.length',2);
        cy.get('a').contains('Edit Profile').click();
        cy.get('button').contains('Save Profile').click();
        cy.intercept('POST','http://localhost:4000/updateUserDetails',{"approved": true});
        cy.location('pathname').should('eq', '/profile')

    });

});