describe('Test', function(){

    it('sign up', function(){

        cy.visit('http://localhost:3000');
        cy.get('input[name="mailid"]').type(generateName()+'@gmail.com');
        cy.get('button').contains('Sign In').click();
        cy.location('pathname').should('eq', '/home')
        cy.get('a').contains('Categories').click();
        cy.get('.dropdown-menu').children().should('have.length',6);

    });
    function generateName(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(var i = 0; i < 5; i++){
            text += possible.charAt(Math.floor(Math.random()*possible.length));
        }
        return text;
    }
});