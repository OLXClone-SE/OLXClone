import {generateName,generatePrice} from '../../support/utils';

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


describe("User should be able to enter product details and submit", function () {
    it("Should fill the product details and submit", function () {
        cy.intercept('POST','/getProducts',{"Products":[]});
        cy.get("a").contains("Sell").click();
        cy.location('pathname').should('eq', '/sell')
        cy.get('input[name="productname"]').type(generateName());
        cy.get('input[name="price"]').type(generatePrice());
        cy.get('button').contains('Sell Product').click();
        cy.location('pathname').should('eq', '/sell')
    });
});


