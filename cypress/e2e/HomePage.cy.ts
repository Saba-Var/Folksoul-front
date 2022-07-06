/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.stopRequests()
  })

  it('user can see components of the welcome page', () => {
    cy.beVisible('შესვლა')
    cy.beVisible('სახელი')
    cy.get("[data-TestId='Sun']").should('be.visible')
    cy.get("[data-TestId='SmallLogo']").should('be.visible')
    cy.get("[data-TestId='UploadBandImage']").should('be.visible')
  })

  it('when click on member info image should change', () => {
    cy.get("[data-TestId='სახელი']").click()
    cy.get("[data-TestId='MemberImage']").should('be.visible')
    cy.get("[data-TestId='სახელი2']").click()
  })

  it("when click on the member we should see member's biography", () => {
    cy.get("[data-TestId='სახელი']").click()
    cy.beVisible('ბიოგრაფია')
    cy.get("[data-TestId='Sun']").click()
    cy.beVisible('ინფორმაცია ბენდის შესახებ')
    cy.get("[data-TestId='სახელი2']").click()
    cy.beVisible('ბიოგრაფია2')
  })
})
