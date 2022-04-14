beforeEach(()=>{
    cy.login()
    })

describe("Navigagte to sell production page", function () {
    it("Should navigate to categories page on click", function () {
        cy.intercept('POST','/getProducts',{"Products":[]});
        cy.get("a").contains("Sell").click();
        cy.location('pathname').should('eq', '/sell')
    });
});