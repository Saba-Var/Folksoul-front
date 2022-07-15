/// <reference types="cypress" />
import 'cypress-file-upload'
import './commands'

Cypress.Commands.add('beVisible', (id: string) => {
  return cy.get(`[data-cy="${id}"]`).should('be.visible')
})

Cypress.Commands.add('addMemberForm', () => {
  cy.intercept(
    'GET',
    'https://folksoul-api.sabavar.redberryinternship.ge/all-members?page=1',
    {
      statusCode: 200,
      body: {
        members: [],
        paginationInfo: {
          totalMembers: 0,
        },
      },
    }
  )
  cy.get("[data-cy='ახალი წევრი გვყავს?']").click()
})

Cypress.Commands.add('stopRequests', () => {
  cy.intercept(
    'GET',
    'https://folksoul-api.sabavar.redberryinternship.ge/all-members',
    {
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
    }
  )

  cy.intercept(
    'GET',
    'https://folksoul-api.sabavar.redberryinternship.ge/all-links',
    {
      statusCode: 200,
      body: [
        {
          linkName: 'google',
          url: 'google.com',
          image: 'images/image.jpg',
        },
      ],
    }
  )

  cy.intercept(
    'GET',
    'https://folksoul-api.sabavar.redberryinternship.ge/band-about',
    {
      statusCode: 200,
      body: [
        {
          about: 'ინფორმაცია ბენდის შესახებ',
        },
      ],
    }
  )
})

Cypress.Commands.add('changeMemberRequests', () => {
  cy.intercept(
    'GET',
    'https://folksoul-api.sabavar.redberryinternship.ge/all-members?page=1',
    {
      statusCode: 200,
      body: {
        members: [{}],
        paginationInfo: {
          totalMembers: 1,
        },
      },
    }
  )
  cy.intercept(
    'POST',
    'https://folksoul-api.sabavar.redberryinternship.ge/get-one-member',
    {
      statusCode: 200,
    }
  )
  cy.intercept(
    'POST',
    'https://folksoul-api.sabavar.redberryinternship.ge/add-member',
    {
      statusCode: 201,
    }
  )
})

Cypress.Commands.add('memberPagination', (data: object, page: number) => {
  cy.intercept(
    'GET',
    `https://folksoul-api.sabavar.redberryinternship.ge/all-members?page=${page}`,
    {
      statusCode: 200,
      body: {
        members: data,
        paginationInfo: {
          totalMembers: 4,
        },
      },
    }
  )
})

Cypress.Commands.add('getAllMembers', () => {
  cy.intercept(
    'GET',
    'https://folksoul-api.sabavar.redberryinternship.ge/all-members?page=1',
    {
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
    }
  )
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
  cy.intercept(
    'GET',
    'https://folksoul-api.sabavar.redberryinternship.ge/all-links',
    {
      statusCode: 200,
      body: links,
    }
  )
})

Cypress.Commands.add('fetchOneMember', () => {
  cy.intercept(
    'GET',
    'https://folksoul-api.sabavar.redberryinternship.ge/all-members?page=1',
    {
      statusCode: 200,
      body: {
        members: [
          {
            name: 'გიო',
            instrument: 'გიტარა',
            orbitLength: '777',
            biography: 'დაიბადა ...',
            _id: 3,
          },
        ],
      },
    }
  )
  cy.wait(500)

  cy.intercept(
    'GET',
    'https://folksoul-api.sabavar.redberryinternship.ge/get-one-member?id=3',
    {
      statusCode: 200,
      body: {
        name: 'გიო',
        instrument: 'გიტარა',
        orbitLength: '777',
        biography: 'დაიბადა ...',
      },
    }
  )
})

Cypress.Commands.add('addNewMember', () => {
  cy.get("[data-cy='name']").type('ილონ')
  cy.get("[data-cy='instrument']").type('დუდუკი')
  cy.get("[data-cy='orbitLength']").type('777')
  cy.get("[data-cy='color']").type('#000000')
  cy.get("[data-cy='biography']").type('ილონი დაიბადა ...')
})
