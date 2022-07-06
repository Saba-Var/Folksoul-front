/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/Login')
  })

  it('user can see components of the Login page', () => {
    cy.beVisible('კარიბჭე')
    cy.beVisible('შემობრძანდი')
  })

  it('when user submits empty form show error message', () => {
    cy.get("[data-TestId='LoginBtn']").click()
    cy.beVisible('ამ ველის შევსება სავალდებულოა!')
    cy.url().should('include', '/Login')
  })

  it('show error when user inputs invalid values', () => {
    cy.get("[data-TestId='მეტსახელი']").type('IT')
    cy.get("[data-TestId='პაროლი']").type('p')
    cy.url().should('include', '/Login')
    cy.get("[data-TestId='LoginBtn']").click()
    cy.beVisible('შეიყვანეთ მინიმუმ 3 სიმბოლო')
    cy.get("[data-TestId='მეტსახელი']").type('IT')
    cy.beVisible('შეიყვანეთ მხოლოდ დაბალი რეგისტრის სიმბოლოები!')
    cy.get("[data-TestId='მეტსახელი']").clear().type('pas')
    cy.get("[data-TestId='პაროლი']").type('as')
  })

  it('if credentials are incorrect show error alert', () => {
    cy.intercept('POST', 'http://localhost:5000/auth', {
      statusCode: 404,
    })
    cy.get("[data-TestId='მეტსახელი']").type('name')
    cy.get("[data-TestId='პაროლი']").type('password')
    cy.get("[data-TestId='LoginBtn']").click()
    cy.beVisible('მეტსახელი ან პაროლი არასწორია!')
    cy.url().should('include', '/Login')
    cy.get("[data-TestId='CloseAlert']").click()
    cy.contains('მეტსახელი ან პაროლი არასწორია!').should('not.be.visible')
  })

  it('if credentials are correct then navigate to dashboard page', () => {
    cy.intercept('POST', 'http://localhost:5000/auth', {
      statusCode: 200,
    })
    cy.get("[data-TestId='მეტსახელი']").type('name')
    cy.get("[data-TestId='პაროლი']").type('password')
    cy.get("[data-TestId='LoginBtn']").click()
    cy.url().should('include', '/Dashboard/Main')
    cy.beVisible('დილამშვიდობისა!')
  })
})
