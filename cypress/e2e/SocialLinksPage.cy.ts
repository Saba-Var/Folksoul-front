/// <reference types="cypress" />

describe('Social Links Page', () => {
  beforeEach(() => {
    cy.visit('/Dashboard/Social-Links')
  })

  it('when visit first time social links page should see components and message', () => {
    cy.fetchSocialLinks([])
    cy.beVisible('სოციალური ბმულები არ არის დამატებული!')
    cy.beVisible('დაამატე ახალი სოციალური ბმული')
    cy.beVisible('სოციალური ბმულები')
  })

  it('when click on the add social link should see form', () => {
    cy.wait(3000)
    cy.get('[data-cy="დაამატე ახალი სოციალური ბმული"]').click()
    cy.beVisible('დაამატე სოციალური ბმული')
    cy.beVisible('გადი უკან')
    cy.beVisible('დაამატე სოციალური ბმული')
  })

  it('when click on the yellow button should see change social link form', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.beVisible('google')
    cy.beVisible('google.com')
    cy.get("[data-cy='YellowBtn']").click()
    cy.beVisible('შეცვალე სოციალური ბმული')
    cy.get("[data-cy='გადი უკან']").click()
    cy.beVisible('სოციალური ბმულები')
  })

  it('when click on the red button should see delete dialog', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.get("[data-cy='RedBtn']").click()
    cy.beVisible('სოციალური ბმულის წაშლა')
    cy.beVisible('წავშალოთ ბმული?')
    cy.get('[data-cy="DeleteNo"]').click()
    cy.contains('წავშალოთ ბმული?').should('not.exist')
  })

  it('after click on the yes of the delete dialog social link should delete', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.get("[data-cy='RedBtn']").click()
    cy.intercept(
      'DELETE',
      'https://folksoul-api.sabavar.redberryinternship.ge/delete-link',
      {
        statusCode: 200,
      }
    )
    cy.get('[data-cy="DeleteYes"]').click()
  })

  it('if input fields are correct change current link info', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.get("[data-cy='YellowBtn']").click()
    cy.intercept(
      'PUT',
      'https://folksoul-api.sabavar.redberryinternship.ge/change-link',
      {
        statusCode: 200,
      }
    )
    cy.get("[data-cy='linkName']").clear()
    cy.beVisible('შევსება სავალდებულოა!')
    cy.get("[data-cy='linkName']").type('Y')
    cy.beVisible('შეიყვანეთ მინიმუმ 2 სიმბოლო')
    cy.get("[data-cy='linkName']").clear().type('YouTube')
    cy.get("[data-cy='url']").type('youtube')
    cy.beVisible('შეიყვანეთ ვალიდური ბმულის მისამართი')
    cy.get("[data-cy='url']").clear().type('youtube.com')
    cy.get("[data-cy='ChangeLink']").click().wait(1000)
    cy.beVisible('ბმულის დეტალები შეიცვალა')
  })

  it('if link already exists show error alert on the change form', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.get("[data-cy='YellowBtn']").click()
    cy.intercept(
      'PUT',
      'https://folksoul-api.sabavar.redberryinternship.ge/change-link',
      {
        statusCode: 409,
      }
    )
    cy.get("[data-cy='linkName']").clear().type('google')
    cy.get("[data-cy='url']").clear().type('youtube.com')
    cy.get("[data-cy='ChangeLink']").click()
    cy.wait(1600)
    cy.beVisible("ბმული 'google' უკვე დამატებულია")
  })

  it('when click on the camera icon then should see modal to upload avatar', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.intercept(
      'PATCH',
      'https://folksoul-api.sabavar.redberryinternship.ge/upload-link-image',
      {
        statusCode: 201,
      }
    )
    cy.get('[data-cy="CameraBtn"]').click({ force: true })
    cy.beVisible('google')

    cy.get('input[type=file]').selectFile('src/assets/images/avatar1.png', {
      force: true,
    })
    cy.get('[data-cy="SaveBtn"]').click()
    cy.contains('შეცვალე სოციალური ბმულის ხატულა').should('not.exist')
  })

  it('on the add new link form if inputs are valid then new link should add', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.intercept(
      'POST',
      'https://folksoul-api.sabavar.redberryinternship.ge/add-social-link',
      {
        statusCode: 201,
      }
    )
    cy.get('[data-cy="დაამატე ახალი სოციალური ბმული"]').click()
    cy.beVisible('დაამატე სოციალური ბმული')
    cy.get("[data-cy='linkName']").type('Youtube')
    cy.get("[data-cy='url']").type('youtube.com')
    cy.get('[data-cy="AddLink"]').click()
    cy.beVisible('ბმული წარმატებით დაემატა')
  })

  it('on the add new link form if link already exists show error alert', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.intercept(
      'POST',
      'https://folksoul-api.sabavar.redberryinternship.ge/add-social-link',
      {
        statusCode: 409,
      }
    )
    cy.get('[data-cy="დაამატე ახალი სოციალური ბმული"]').click()
    cy.get("[data-cy='linkName']").type('Youtube', { force: true }).wait(1000)
    cy.get("[data-cy='url']").type('youtube.com')
    cy.get('[data-cy="AddLink"]').click()
    cy.wait(1600)
    cy.beVisible("ბმული 'Youtube' უკვე დამატებულია")
  })

  it('after click on the yes of the delete dialog and there is error link should not delete', () => {
    cy.fetchSocialLinks([{ linkName: 'google' }])
    cy.intercept(
      'DELETE',
      'https://folksoul-api.sabavar.redberryinternship.ge/delete-link',
      {
        statusCode: 404,
        body: {
          id: 'id',
        },
      }
    )
    cy.get("[data-cy='RedBtn']").click()
    cy.get('[data-cy="DeleteYes"]').click()
    cy.beVisible('ბმული ვერ წაიშალა')
  })

  it('when visit first time social links page should see components and message', () => {
    cy.intercept(
      'GET',
      'https://folksoul-api.sabavar.redberryinternship.ge/all-links',
      {
        statusCode: 404,
      }
    )
    cy.beVisible('ინფორმაცია ვერ მოიძებნა')
  })
})
