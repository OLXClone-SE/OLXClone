beforeEach(()=>{
    cy.login()
    })
    
describe('Test', function(){

    it('sign up', function(){
        cy.intercept('POST','/getProducts',{"Products":[]});
        cy.get('a').contains('Profile').click();
        cy.get('.dropdown-menu').children().contains('Edit Profile').click();

    });

});