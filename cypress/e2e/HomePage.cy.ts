/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.stopRequests()
  })

  it('user can see components of the welcome page', () => {
    cy.viewport(1920, 1000)
    cy.beVisible('შესვლა').wait(200)
    cy.beVisible('სახელი').wait(200)
    cy.get("[data-cy='Sun']").should('be.visible').wait(200)
    cy.get("[data-cy='SmallLogo']").should('be.visible').wait(200)
    cy.get("[data-cy='UploadBandImage']").should('be.visible').wait(200)
  })

  it('when click on member info image should change', () => {
    cy.get("[data-cy='სახელი']").click().wait(200)
    cy.contains('გრძელის...').should('be.visible').wait(200)
    cy.get("[data-cy='MemberImage']").should('be.visible').wait(200)
    cy.get("[data-cy='სახელი2']").click().wait(200)
  })

  it("when click on the member we should see member's biography", () => {
    cy.get("[data-cy='სახელი']").click().wait(200)
    cy.contains('ბიოგრაფია').should('be.visible').wait(200)
    cy.get("[data-cy='Sun']").click().wait(200)
    cy.contains('ინფორმაცია ბენდის შესახებ').should('be.visible').wait(200)
    cy.get("[data-cy='სახელი2']").click().wait(200)
    cy.contains('ბიოგრაფია2').should('be.visible').wait(200)
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
    ).wait(200)
  })
})
