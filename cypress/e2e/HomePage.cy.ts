/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
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

  it('user can see components of the welcome page', () => {
    cy.beVisible('შესვლა')
    cy.beVisible('სახელი')
    cy.get("[data-TestId='Sun']").should('be.visible')
    cy.get("[data-TestId='SmallLogo']").should('be.visible')
    cy.get("[data-TestId='UploadBandImage']").should('be.visible')
  })

  it("when click on the member we should see member's biography", () => {
    cy.get("[data-TestId='სახელი']").click()
    cy.beVisible('ბიოგრაფია')
    cy.get("[data-TestId='Sun']").click()
    cy.beVisible('ინფორმაცია ბენდის შესახებ')
    cy.get("[data-TestId='სახელი2']").click()
    cy.beVisible('ბიოგრაფია2')
    cy.get("[data-TestId='google']").click()
    cy.url().should('not.include', 'google.com')
  })

  it('when click on member info image should change', () => {
    cy.get("[data-TestId='სახელი']").click()
    cy.get("[data-TestId='MemberImage']").should('be.visible')
    cy.get("[data-TestId='სახელი2']").click()
  })
})
