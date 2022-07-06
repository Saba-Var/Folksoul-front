/// <reference types="cypress" />

import './commands'

Cypress.Commands.add('beVisible', (value: string) => {
  return cy.contains(value).should('be.visible')
})

declare global {
  namespace Cypress {
    interface Chainable {
      beVisible(value: string): Chainable<undefined>
    }
  }
}
