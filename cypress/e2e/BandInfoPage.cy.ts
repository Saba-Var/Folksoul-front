/// <reference types="cypress" />

describe('Band Info Page', () => {
  beforeEach(() => {
    cy.visit('/Dashboard/About')
    cy.intercept('GET', 'http://localhost:5000/band-about', {
      statusCode: 200,
      body: [
        {
          about: '...',
        },
      ],
    })
  })

  it('when click on the camera button should see image upload dialog', () => {
    cy.intercept('PATCH', 'http://localhost:5000/upload-band-image', {
      statusCode: 201,
    })

    cy.beVisible('ბენდის შესახებ')
    cy.get("[data-TestId='CameraBtn']").click({ force: true })
    cy.beVisible('შეცვალე ბენდის პორტრეტი')
    cy.get('input[type=file]').selectFile('src/assets/images/avatar1.png', {
      force: true,
    })
    cy.get('[data-TestId="SaveBtn"]').click()
    cy.contains('შეცვალე ბენდის პორტრეტი').should('not.exist')
  })

  it('when click on the edit button should see textarea to edit band info', () => {
    cy.intercept('PUT', 'http://localhost:5000/change-band-about', {
      statusCode: 403,
    })
    cy.beVisible('ბენდის შესახებ')
    cy.get('[data-TestId="EditBtn"]').click({ force: true })
    cy.beVisible('ბენდის შესახებ - დაარედაქტირე')
    cy.beVisible('შეინახე')
    cy.get('[data-TestId="TextareaInput"]').clear()
    cy.get('[data-TestId="GreenBtn"]').click()
    cy.beVisible('შეიყვანეთ ინფორმაცია')
    cy.get('[data-TestId="გადი უკან"]').click()
    cy.beVisible('ბენდის შესახებ')
  })

  it('when input is not empty band info should update', () => {
    cy.intercept('PUT', 'http://localhost:5000/change-band-about', {
      statusCode: 200,
    })
    cy.get('[data-TestId="EditBtn"]').click({ force: true })
    cy.get('[data-TestId="TextareaInput"]').clear().type('ბენდი დაარსდა ...')
    cy.get('[data-TestId="GreenBtn"]').click()
    cy.beVisible('ინფორმაცია შეიცვალა')
  })
})
