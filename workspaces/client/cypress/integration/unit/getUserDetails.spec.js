beforeEach(()=>{
    cy.login()
    })
    
describe('Get User Details', function(){

    it('Get User Details', function(){
        cy.intercept('POST','/getProducts',{"Products":[]});
        cy.get('a').contains('Profile').click();
        cy.get('.dropdown-menu').children().should('have.length',2);
        cy.get('a').contains('Edit Profile').click();
        cy.intercept('POST','http://localhost:4000/getUserDetails',{
            "mailid": "sample@gmail.com",
            "fname": "Test",
            "lname": "Test",
            "phone": "9999999999"
        });
    });

});