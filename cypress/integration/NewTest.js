/// <reference types="Cypress" />
it('SHOULD',() => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
      .type(100)
      .should('have.value', 100)
      .and('be.visible')
});

it('SHOULD',() => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
      .type(100).then( input=> {
          expect(input).to.have.value(100)
      })
});

it('SHOULD',() => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.get('[data-qa-value="UAH"]')
      .should('be.checked')
});

it('check is visible',() => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.contains('Мої депозити')
      .trigger('mouseover')
      .get('#archiveDeposits')
      .should('be.visible')
});

it('check button',() => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.contains('Show cards')
      .should('have.attr', 'type')
      .and('match', /button/)
});

it('check is correct url',() => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.url()
      .should('eq', 'https://next.privat24.ua/?lang=en')
});

it('focus',() => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="phone-number"]')
      .type(1112233344)
});

it('type',() => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
      .focus()
});

it('blur',() => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
      .focus()
      .blur()
});

it('clear',() => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
      .type(999)
      .wait(2000)
      .clear()
});

it.only('replenishment of phone number',() => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="phone-number"]')
      .type('686979712')
      .get('[data-qa-node="amount"]')
      .type('1')
      .get('[data-qa-node="numberdebitSource"]')
});
