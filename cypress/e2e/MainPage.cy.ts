/// <reference types="cypress" />

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('/Dashboard/Main')
  })

  it('user can see components of the Dashboard page', () => {
    cy.beVisible('დილამშვიდობისა!')
    cy.beVisible('მთავარი')
    cy.beVisible('ჯგუფის წევრები')
    cy.beVisible('სოციალური ბმულები')
    cy.beVisible('ბენდის შესახებ')
    cy.beVisible('გადი გარეთ')
  })

  it('when click on the logout button navigate to landing page', () => {
    cy.stopRequests()
    cy.beVisible('გადი გარეთ')
    cy.get("[data-TestId='Logout']").click()
    cy.url().should('not.include', '/Dashboard/Main')
  })

  it('when click on the Members section navigate to members 1st page', () => {
    cy.intercept('GET', 'http://localhost:5000/all-members?page=1', {
      statusCode: 200,
      body: {
        members: [],
        paginationInfo: {
          totalMembers: 0,
        },
      },
    })
    cy.beVisible('გადი გარეთ')
    cy.get("[data-TestId='Members']").click()
    cy.url().should('include', 'Members?page=1')
    cy.beVisible('ჯგუფს ჯერჯერობით არ ჰყავს წევრები!')
  })

  it('when click on the section navigate to it', () => {
    cy.intercept('GET', 'http://localhost:5000/band-about', {
      statusCode: 200,
      body: [
        {
          about: 'ბენდის შესახებ ინფორმაცია არ არის დამატებული',
        },
      ],
    })
    cy.get("[data-TestId='About']").click()
    cy.url().should('include', 'About')
    cy.beVisible('ბენდის შესახებ ინფორმაცია არ არის დამატებული')
  })
})
