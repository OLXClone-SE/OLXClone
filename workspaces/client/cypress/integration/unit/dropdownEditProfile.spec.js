beforeEach(()=>{
    cy.login()
    })
    
describe('Navigate to drop down menu of profile', function(){

    it('User profile should have the dropdown', function(){
        cy.intercept('POST','/getProducts',{"Products":[]});
        cy.get('a').contains('Profile').click();
        cy.get('.dropdown-menu').children().contains('Edit Profile').click();

    });

});