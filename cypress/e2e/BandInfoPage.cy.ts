/// <reference types="cypress" />

describe('Band Info Page', () => {
  beforeEach(() => {
    cy.visit('/Dashboard/About')
    cy.intercept(
      'GET',
      'https://folksoul-api.sabavar.redberryinternship.ge/band-about',
      {
        statusCode: 200,
        body: [
          {
            about: '...',
          },
        ],
      }
    )
  })

  it('when click on the camera button should see image upload dialog', () => {
    cy.intercept(
      'PATCH',
      'https://folksoul-api.sabavar.redberryinternship.ge/upload-band-image',
      {
        statusCode: 201,
      }
    )

    cy.beVisible('ბენდის შესახებ')
    cy.get("[data-cy='CameraBtn']").click({ force: true })
    cy.beVisible('შეცვალე ბენდის პორტრეტი')
    cy.get('input[type=file]').selectFile('src/assets/images/avatar-1.png', {
      force: true,
    })
    cy.get('[data-cy="SaveBtn"]').click()
    cy.contains('შეცვალე ბენდის პორტრეტი').should('not.exist')
  })

  it('when click on the edit button should see textarea to edit band info', () => {
    cy.intercept(
      'PUT',
      'https://folksoul-api.sabavar.redberryinternship.ge/change-band-about',
      {
        statusCode: 403,
      }
    )
    cy.beVisible('ბენდის შესახებ')
    cy.get('[data-cy="EditBtn"]').click({ force: true })
    cy.beVisible('ბენდის შესახებ - დაარედაქტირე')
    cy.get('[data-cy="TextareaInput"]').clear()
    cy.get('[data-cy="GreenBtn"]').click()
    cy.beVisible('შეიყვანეთ ინფორმაცია')
    cy.get('[data-cy="გადი უკან"]').click()
    cy.beVisible('ბენდის შესახებ')
  })

  it('when input is not empty band info should update', () => {
    cy.intercept(
      'PUT',
      'https://folksoul-api.sabavar.redberryinternship.ge/change-band-about',
      {
        statusCode: 200,
      }
    )
    cy.get('[data-cy="EditBtn"]').click({ force: true })
    cy.get('[data-cy="TextareaInput"]').clear().type('ბენდი დაარსდა ...')
    cy.get('[data-cy="GreenBtn"]').click()
    cy.beVisible('ინფორმაცია შეიცვალა')
  })

  it('if image upload fails should see error alert', () => {
    cy.intercept(
      'PATCH',
      'https://folksoul-api.sabavar.redberryinternship.ge/upload-band-image',
      {
        statusCode: 404,
      }
    )
    cy.get("[data-cy='CameraBtn']").click({ force: true })
    cy.get('input[type=file]').selectFile('src/assets/images/avatar-1.png', {
      force: true,
    })
    cy.get('[data-cy="SaveBtn"]').click()
    cy.beVisible('სურათი ვერ აიტვირთა')
  })

  it('when upload invalid file show alert', () => {
    cy.getAllMembers()
    cy.get('[data-cy="CameraBtn"]').click({ force: true })
    cy.get('input[type=file]').selectFile('src/index.tsx', {
      force: true,
    })
    cy.beVisible('ატვირთეთ მხოლოდ სურათი')
    cy.contains('შეინახე').should('not.exist')
  })

  it('if fetching of band information fails should see alert', () => {
    cy.intercept(
      'GET',
      'https://folksoul-api.sabavar.redberryinternship.ge/band-about',
      {
        statusCode: 404,
        body: [
          {
            about: '...',
          },
        ],
      }
    )
    cy.wait(1600)
    cy.beVisible('ინფორმაცია ვერ მოიძებნა')
    cy.get('[data-cy="CloseAlert"]').click()
    cy.beVisible('ინფორმაცია ვერ მოიძებნა').wait(1600)
  })
})
