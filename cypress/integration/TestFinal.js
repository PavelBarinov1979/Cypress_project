/// <reference types="Cypress" />

it("check", () =>{
 cy.intercept ("https://next.privat24.ua/money-transfer/form/")
 cy.wait(2000).get('tbody').toMatchImageSnapshots();
});