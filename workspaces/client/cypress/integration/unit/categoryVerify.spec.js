beforeEach(()=>{
cy.login()
})

describe("Navigate to category dropdown", function () {
  it("Categories should popup on clicking category drop down", function () {
    cy.intercept('POST','/getProducts',{"Products":[]});
    cy.get("a").contains("Categories").click();
    cy.get(".dropdown-menu").children().should("have.length", 6);
  });
});
