/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.stopRequests()
  })

  it('user can see components of the welcome page', () => {
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
    cy.beVisible('ბიოგრაფია')
    cy.get("[data-cy='Sun']").click()
    cy.beVisible('ინფორმაცია ბენდის შესახებ')
    cy.get("[data-cy='სახელი2']").click()
    cy.beVisible('ბიოგრაფია2')
  })
})
