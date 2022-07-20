/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/Login')
  })

  it('user can see components of the Login page', () => {
    cy.isVisible('კარიბჭე')
    cy.isVisible('LoginBtn')
  })

  it('when user submits empty form show error message', () => {
    cy.get("[data-cy='LoginBtn']").click()
    cy.isVisible('ამ ველის შევსება სავალდებულოა!')
    cy.url().should('include', '/Login')
  })

  it('show error when user inputs invalid values', () => {
    cy.get("[data-cy='მეტსახელი']").type('IT', { force: true })
    cy.get("[data-cy='პაროლი']").type('p')
    cy.url().should('include', '/Login')
    cy.get("[data-cy='LoginBtn']").click()
    cy.get("[data-cy='შეიყვანეთ მინიმუმ 3 სიმბოლო!']")
      .should('be.visible')
      .wait(400)
    cy.get("[data-cy='მეტსახელი']").type('IT')
    cy.isVisible('შეიყვანეთ მხოლოდ დაბალი რეგისტრის სიმბოლოები!')
    cy.get("[data-cy='მეტსახელი']").clear().type('pas')
    cy.get("[data-cy='პაროლი']").type('as')
  })

  it('if credentials are incorrect show error alert', () => {
    cy.intercept(
      'POST',
      'https://folksoul-api.sabavar.redberryinternship.ge/auth',
      {
        statusCode: 404,
      }
    )
    cy.get("[data-cy='მეტსახელი']").type('name')
    cy.get("[data-cy='პაროლი']").type('password')
    cy.get("[data-cy='LoginBtn']").click()
    cy.isVisible('მეტსახელი ან პაროლი არასწორია')
    cy.url().should('include', '/Login')
    cy.get("[data-cy='CloseAlert']").click()
    cy.get("[data-cy='მეტსახელი ან პაროლი არასწორია']").should('not.be.visible')
  })

  it('if credentials are correct then navigate to dashboard page', () => {
    cy.intercept(
      'POST',
      'https://folksoul-api.sabavar.redberryinternship.ge/auth',
      {
        statusCode: 201,
      }
    )
    cy.get("[data-cy='მეტსახელი']").type('name')
    cy.get("[data-cy='პაროლი']").type('password')
    cy.get("[data-cy='LoginBtn']").click()
    cy.url().should('include', '/Dashboard/Main')
    cy.isVisible('დილამშვიდობისა!')
  })
})
