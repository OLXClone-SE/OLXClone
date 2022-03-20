beforeEach(()=>{
cy.login()
})

describe("Test", function () {
  it("sign up", function () {
    cy.intercept('POST','/getProducts',{"Products":[]});
    cy.get("a").contains("Categories").click();
    cy.get(".dropdown-menu").children().should("have.length", 6);
  });
});
