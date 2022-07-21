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

    cy.isVisible('ბენდის შესახებ')
    cy.get("[data-cy='CameraBtn']").click({ force: true })
    cy.isVisible('შეცვალე ბენდის პორტრეტი')
    cy.get('input[type=file]').selectFile('src/assets/images/avatar-1.png', {
      force: true,
    })
    cy.get('[data-cy="SaveBtn"]').click()
    cy.get('[data-cy="შეცვალე ბენდის პორტრეტი"]').should('not.exist')
  })

  it('when click on the edit button should see textarea to edit band info', () => {
    cy.intercept(
      'PUT',
      'https://folksoul-api.sabavar.redberryinternship.ge/change-band-about',
      {
        statusCode: 403,
      }
    )
    cy.isVisible('ბენდის შესახებ')
    cy.get('[data-cy="EditBtn"]').click({ force: true })
    cy.isVisible('ბენდის შესახებ - დაარედაქტირე')
    cy.get('[data-cy="TextareaInput"]').clear()
    cy.get('[data-cy="GreenBtn"]').click()
    cy.isVisible('შეიყვანეთ ინფორმაცია')
    cy.get('[data-cy="გადი უკან"]').click()
    cy.isVisible('ბენდის შესახებ')
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
    cy.isVisible('ბენდის შესახებ')
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
    cy.isVisible('სურათი ვერ აიტვირთა')
  })

  it('when upload invalid file show alert', () => {
    cy.getAllMembers()
    cy.get('[data-cy="CameraBtn"]').click({ force: true })
    cy.get('input[type=file]').selectFile('src/index.tsx', {
      force: true,
    })
    cy.isVisible('ატვირთეთ მხოლოდ სურათი')
    cy.get('[data-cy="SaveBtn"]').should('not.exist')
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
    cy.isVisible('ინფორმაცია ვერ მოიძებნა')
    cy.get('[data-cy="CloseAlert"]').click()
    cy.isVisible('ინფორმაცია ვერ მოიძებნა').wait(1600)
  })

  it('if image is not uploaded to database when close the modal file should remove from file picker', () => {
    cy.get("[data-cy='CameraBtn']").click({ force: true })
    cy.get('input[type=file]').selectFile('src/assets/images/avatar-1.png', {
      force: true,
    })
    cy.get('[data-cy="Modal"]').click({ force: true })
    cy.get("[data-cy='CameraBtn']").click({ force: true })
    cy.get('[data-cy="SaveBtn"]').should('not.exist')
    cy.get('input[type=file]').selectFile('src/assets/images/avatar-1.png', {
      force: true,
    })
    cy.isVisible('SaveBtn')
  })
})
