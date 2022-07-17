/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.stopRequests()
  })

  it('user can see components of the welcome page', () => {
    cy.viewport(1920, 1000)
    cy.beVisible('შესვლა')
    cy.beVisible('სახელი')
    cy.get("[data-cy='Sun']").should('be.visible')
    cy.get("[data-cy='SmallLogo']").should('be.visible')
    cy.get("[data-cy='UploadBandImage']").should('be.visible')
  })

  it('when click on member info image should change', () => {
    cy.get("[data-cy='სახელი']").click()
    cy.get("[data-cy='MemberImage']").should('be.visible')
    cy.get("[data-cy='სახელი2']").click()
  })

  it("when click on the member we should see member's biography", () => {
    cy.get("[data-cy='სახელი']").click()
    cy.contains('ბიოგრაფია').should('be.visible')
    cy.get("[data-cy='Sun']").click()
    cy.contains('ინფორმაცია ბენდის შესახებ').should('be.visible')
    cy.get("[data-cy='სახელი2']").click()
    cy.contains('ბიოგრაფია2').should('be.visible')
  })

  it('if user is logged in navigate to dashboard', () => {
    cy.intercept(
      'POST',
      'https://folksoul-api.sabavar.redberryinternship.ge/auth',
      {
        statusCode: 200,
      }
    )
    cy.visit('/Login')
    cy.get("[data-cy='მეტსახელი']").type('name')
    cy.get("[data-cy='პაროლი']").type('password')
    cy.get("[data-cy='LoginBtn']").click()
    window.localStorage.setItem('token', 'token')
    cy.visit('/')
    cy.url().should('include', 'Dashboard/Main')
  })

  it('if band images is uploaded show it', () => {
    cy.intercept(
      'GET',
      'https://folksoul-api.sabavar.redberryinternship.ge/band-about',
      {
        statusCode: 200,
        body: [
          {
            about: '',
            image: 'images/',
          },
        ],
      }
    )
  })
})
