describe('signUpVerification', function(){

    it('sign up', function(){

        cy.visit('http://localhost:3000');
        cy.get('a').contains('Sign Up').click();
        cy.location('pathname').should('eq', '/signup')
        cy.get('input[name="fname"]').type(generateName());
        cy.get('input[name="lname"]').type(generateName());
        cy.get('input[name="mailid"]').type(generateName()+'@gmail.com');
        cy.get('input[name="phone"]').type('1'+genereatePhoneNumber(9));
        cy.get('input[name="password"]').type(password());
        cy.get('button').contains('Sign Up').click();
        cy.location('pathname').should('eq', '/verify')
    });


    function genereatePhoneNumber(i){
        var num = "";
        var numbers = "1234567890";
        for(var j = 0; j < i; j++){
            num += numbers.charAt(Math.floor(Math.random()*numbers.length));
        }
        return num;
    }

    function generateName(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(var i = 0; i < 5; i++){
            text += possible.charAt(Math.floor(Math.random()*possible.length));
        }
        return text;
    }
    function password(){
        var text = "";
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var LowerCase = "abcdefghijklmnopqrstuvwxyz"
        var specialCharacters = "!@#$%^&*";
        var numbers = "1234567890"
        for(var i = 0; i < 3; i++){
            text += upperCase.charAt(Math.floor(Math.random()*upperCase.length));
            text += LowerCase.charAt(Math.floor(Math.random()*LowerCase.length));
            text += specialCharacters.charAt(Math.floor(Math.random()*specialCharacters.length));
            text += numbers.charAt(Math.floor(Math.random()*numbers.length));
        }
        return text;
    }

});