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
    cy.get('[data-TestId="დაამატე ახალი სოციალური ბმული"]').click()
    cy.beVisible('დაამატე სოციალური ბმული')
    cy.beVisible('გადი უკან')
    cy.beVisible('დაამატე სოციალური ბმული')
  })

  it('when click on the yellow button should see change social link form', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.beVisible('google')
    cy.beVisible('google.com')
    cy.get("[data-TestId='YellowBtn']").click()
    cy.beVisible('შეცვალე სოციალური ბმული')
    cy.get("[data-TestId='გადი უკან']").click()
    cy.beVisible('სოციალური ბმულები')
  })

  it('when click on the red button should see delete dialog', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.get("[data-TestId='RedBtn']").click()
    cy.beVisible('სოციალური ბმულის წაშლა')
    cy.beVisible('წავშალოთ ბმული?')
    cy.get('[data-testid="DeleteNo"]').click()
    cy.contains('წავშალოთ ბმული?').should('not.exist')
  })

  it('after click on the yes of the delete dialog social link should delete', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.get("[data-TestId='RedBtn']").click()
    cy.intercept('DELETE', 'http://localhost:5000/delete-link', {
      statusCode: 200,
    })
    cy.get('[data-TestId="DeleteYes"]').click()
  })

  it('if input fields are correct change current link info', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.get("[data-TestId='YellowBtn']").click()
    cy.intercept('PUT', 'http://localhost:5000/change-link', {
      statusCode: 200,
    })
    cy.get("[data-TestId='linkName']").clear()
    cy.beVisible('შევსება სავალდებულოა!')
    cy.get("[data-TestId='linkName']").type('Y')
    cy.beVisible('შეიყვანეთ მინიმუმ 2 სიმბოლო')
    cy.get("[data-TestId='linkName']").clear().type('YouTube')
    cy.get("[data-TestId='url']").type('youtube')
    cy.beVisible('შეიყვანეთ ვალიდური ბმულის მისამართი')
    cy.get("[data-TestId='url']").clear().type('youtube.com')
    cy.get("[data-TestId='ChangeLink']").click()
    cy.beVisible('ბმულის დეტალები შეიცვალა')
  })

  it('if link already exists show error alert on the change form', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.get("[data-TestId='YellowBtn']").click()
    cy.intercept('PUT', 'http://localhost:5000/change-link', {
      statusCode: 409,
    })
    cy.get("[data-TestId='linkName']").clear().type('Youtube')
    cy.get("[data-TestId='url']").clear().type('youtube.com')
    cy.get("[data-TestId='ChangeLink']").click()
    cy.beVisible("ბმული 'google' უკვე დამატებულია")
  })

  it('when click on the camera icon then should see modal to upload avatar', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.intercept('PATCH', 'http://localhost:5000/upload-link-image', {
      statusCode: 201,
    })
    cy.get('[data-TestId="CameraBtn"]').click({ force: true })
    cy.beVisible('google')

    cy.get('input[type=file]').selectFile('src/assets/images/avatar1.png', {
      force: true,
    })
    cy.get('[data-TestId="SaveBtn"]').click()
    cy.contains('შეცვალე სოციალური ბმულის ხატულა').should('not.exist')
  })

  it('on the add new link form if inputs are valid then new link should add', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.intercept('POST', 'http://localhost:5000/add-social-link', {
      statusCode: 201,
    })
    cy.get('[data-TestId="დაამატე ახალი სოციალური ბმული"]').click()
    cy.beVisible('დაამატე სოციალური ბმული')
    cy.get("[data-TestId='linkName']").type('Youtube')
    cy.get("[data-TestId='url']").type('youtube.com')
    cy.get('[data-TestId="AddLink"]').click()
    cy.beVisible('ბმული წარმატებით დაემატა')
  })

  it('on the add new link form if link already exists show error alert', () => {
    cy.fetchSocialLinks([{ linkName: 'google', url: 'google.com' }])
    cy.intercept('POST', 'http://localhost:5000/add-social-link', {
      statusCode: 409,
    })
    cy.get('[data-TestId="დაამატე ახალი სოციალური ბმული"]').click()
    cy.get("[data-TestId='linkName']").type('Youtube')
    cy.get("[data-TestId='url']").type('youtube.com')
    cy.get('[data-TestId="AddLink"]').click()
    cy.beVisible("ბმული 'Youtube უკვე დამატებულია")
  })
})
