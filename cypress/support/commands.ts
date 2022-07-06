/// <reference types="cypress" />

import './commands'

Cypress.Commands.add('beVisible', (value: string) => {
  return cy.contains(value).should('be.visible')
})

Cypress.Commands.add('stopRequests', () => {
  cy.intercept('GET', 'http://localhost:5000/all-members', {
    statusCode: 200,
    body: {
      members: [
        {
          _id: 'id',
          name: 'სახელი',
          orbitLength: 300,
          color: '#FF0000',
          biography: 'ბიოგრაფია',
          image: 'images/image',
        },

        {
          _id: 'id2',
          name: 'სახელი2',
          orbitLength: 600,
          color: '#FF0000',
          biography: 'ბიოგრაფია2',
        },
      ],
    },
  })

  cy.intercept('GET', 'http://localhost:5000/all-links', {
    statusCode: 200,
    body: [
      {
        linkName: 'google',
        url: 'google.com',
        image: 'images/image.jpg',
      },
    ],
  })

  cy.intercept('GET', 'http://localhost:5000/band-about', {
    statusCode: 200,
    body: [
      {
        about: 'ინფორმაცია ბენდის შესახებ',
      },
    ],
  })
})

declare global {
  namespace Cypress {
    interface Chainable {
      beVisible(value: string): Chainable<Element>
      stopRequests(): Chainable<Element>
    }
  }
}
