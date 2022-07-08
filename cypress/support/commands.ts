/// <reference types="cypress" />
import 'cypress-file-upload'
import './commands'

Cypress.Commands.add('beVisible', (value: string) => {
  return cy.contains(value).should('be.visible')
})

Cypress.Commands.add('addMemberForm', () => {
  cy.intercept('GET', 'http://localhost:5000/all-members?page=1', {
    statusCode: 200,
    body: {
      members: [],
      paginationInfo: {
        totalMembers: 0,
      },
    },
  })
  cy.get("[data-cy='ახალი წევრი გვყავს?']").click()
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

Cypress.Commands.add('changeMemberRequests', () => {
  cy.intercept('GET', 'http://localhost:5000/all-members?page=1', {
    statusCode: 200,
    body: {
      members: [{}],
      paginationInfo: {
        totalMembers: 1,
      },
    },
  })
  cy.intercept('POST', 'http://localhost:5000/get-one-member', {
    statusCode: 200,
  })
  cy.intercept('POST', 'http://localhost:5000/add-member', {
    statusCode: 201,
  })
})

Cypress.Commands.add('memberPagination', (data: object, page: number) => {
  cy.intercept('GET', `http://localhost:5000/all-members?page=${page}`, {
    statusCode: 200,
    body: {
      members: data,
      paginationInfo: {
        totalMembers: 4,
      },
    },
  })
})

Cypress.Commands.add('getAllMembers', () => {
  cy.intercept('GET', 'http://localhost:5000/all-members?page=1', {
    statusCode: 200,
    body: {
      members: [
        {
          name: 'სახელი',
          orbitLength: 300,
          instrument: 'გიტარა',
          color: '#FF0000',
          biography: 'დაიბადა ...',
        },
      ],
      paginationInfo: {
        totalMembers: 1,
      },
    },
  })
})

Cypress.Commands.add('memberTwoPage', () => {
  cy.memberPagination(
    [
      {
        name: 'წევრი',
      },
      {
        name: 'წევრი2',
      },
      {
        name: 'წევრი3',
      },
    ],
    1
  )
  cy.memberPagination(
    [
      {
        name: 'წევრი4',
      },
    ],
    2
  )
})

Cypress.Commands.add('fetchSocialLinks', (links: object) => {
  cy.intercept('GET', 'http://localhost:5000/all-links', {
    statusCode: 200,
    body: links,
  })
})

Cypress.Commands.add('addNewMember', () => {
  cy.get("[data-cy='name']").type('ილონ')
  cy.get("[data-cy='instrument']").type('დუდუკი')
  cy.get("[data-cy='orbitLength']").type('777')
  cy.get("[data-cy='color']").type('#000000')
  cy.get("[data-cy='biography']").type('ილონი დაიბადა ...')
})

declare global {
  namespace Cypress {
    interface Chainable {
      memberPagination(data: object, page: number): Chainable<Element>
      fetchSocialLinks(links: object): Chainable<Element>
      beVisible(value: string): Chainable<Element>
      changeMemberRequests(): Chainable<Element>
      addMemberForm(): Chainable<Element>
      getAllMembers(): Chainable<Element>
      stopRequests(): Chainable<Element>
      addNewMember(): Chainable<Element>
      memberTwoPage(): Chainable<Element>
    }
  }
}
