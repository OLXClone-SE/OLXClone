describe("Test", function () {
  it("sign up", function () {
    cy.visit("http://localhost:3000");
    cy.get('input[name="mailid"]').type(generateName() + "@gmail.com");
    cy.get('input[name="password"]').type(password());
    cy.get("button").contains("Sign In").click();
    cy.location("pathname").should("eq", "/home");
    cy.get("a").contains("Categories").click();
    cy.get(".dropdown-menu").children().should("have.length", 6);
  });
  function generateName() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  function password() {
    var text = "";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var LowerCase = "abcdefghijklmnopqrstuvwxyz";
    var specialCharacters = "!@#$%^&*";
    var numbers = "1234567890";
    for (var i = 0; i < 3; i++) {
      text += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
      text += LowerCase.charAt(Math.floor(Math.random() * LowerCase.length));
      text += specialCharacters.charAt(
        Math.floor(Math.random() * specialCharacters.length)
      );
      text += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return text;
  }
});
