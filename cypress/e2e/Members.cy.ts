/// <reference types="cypress" />

describe('Members Page', () => {
  beforeEach(() => {
    cy.visit('/Dashboard/Members?page=1')
  })

  it('if we change member but this member is already in the band show error alert', () => {
    cy.intercept(
      'PUT',
      'https://folksoul-api.sabavar.redberryinternship.ge/change-member',
      {
        statusCode: 409,
      }
    )
    cy.changeMemberRequests()
    cy.get('[data-cy="ChangeInfo"]').click()
    cy.wait(3000)
    cy.addNewMember()
    cy.get("[data-cy='name']").type('სახელი').wait(1000)
    cy.get("[data-cy='instrument']").type('გიტარა').wait(1000)
    cy.get("[data-cy='biography']").type('დაიბადა').wait(1000)
    cy.get('[data-cy="შეცვლა"]').click().wait(2000)
    cy.contains('წევრი უკვე ბენდშია').should('be.visible')
  })

  it('when there is no member should see message on the page', () => {
    cy.intercept(
      'GET',
      'https://folksoul-api.sabavar.redberryinternship.ge/all-members?page=1',
      {
        statusCode: 200,
        body: {
          members: [],
          paginationInfo: {
            totalMembers: 0,
          },
        },
      }
    )
    cy.beVisible('ჯგუფს ჯერჯერობით არ ჰყავს წევრები!')
  })

  it('we can edit information of band member and save it if inputs are valid', () => {
    cy.changeMemberRequests()
    cy.intercept(
      'PUT',
      'https://folksoul-api.sabavar.redberryinternship.ge/change-member',
      {
        statusCode: 200,
      }
    )
    cy.get('[data-cy="ChangeInfo"]').click()
    cy.beVisible('შეცვალე წევრის ინფორმაცია')
    cy.addNewMember()
    cy.get("[data-cy='name']").type('სახელი').wait(1000)
    cy.get("[data-cy='instrument']").type('გიტარა').wait(1000)
    cy.get("[data-cy='biography']").type('დაიბადა').wait(1000)
    cy.get('[data-cy="name"]').type('ილონ').wait(1000)
    cy.get('[data-cy="შეცვლა"]').click()
    cy.beVisible('წევრის იფორმაცია შეიცვალა')
  })

  it('when input values of new member are invalid show error message', () => {
    cy.addMemberForm()
    cy.beVisible('დაამატე ჯგუფის ახალი წევრი')
    cy.get("[data-cy='დაამატე წევრი']").click()
    cy.beVisible('შევსება სავალდებულოა!')
    cy.get("[data-cy='name']").type('name').wait(1000)
    cy.beVisible('მხოლოდ ქართული ასოები')
    cy.get("[data-cy='name']").clear()
    cy.get("[data-cy='instrument']").type('ს').wait(1000)
    cy.beVisible('მინიმუმ 2 სიმბოლო')
    cy.get("[data-cy='color']").type('ს').wait(1000)
    cy.beVisible("ფერი უნდაი წყებოდეს '#'-ით")
    cy.get("[data-cy='color']").clear().type('#00000').wait(1000)
    cy.beVisible('ფერი უნდა იყოს 7 სიმბოლო')
    cy.get("[data-cy='biography']").type('s').wait(1000)
    cy.beVisible('მხოლოდ ქართული ასოები')
    cy.get("[data-cy='biography']").clear()
    cy.beVisible('შევსება სავალდებულოა')
    cy.get("[data-cy='color']").clear().type('#ffffff').wait(1000)
    cy.beVisible('მიუთითეთ მაღალი რეგისტრის ლათინური ასოები და რიცხვები')
    cy.get('[data-cy="დაამატე წევრი"]').click()
    cy.url().should('include', 'Members?page=1')
  })

  it('if input values are valid create new member', () => {
    cy.addMemberForm()
    cy.intercept(
      'POST',
      'https://folksoul-api.sabavar.redberryinternship.ge/add-member',
      {
        statusCode: 201,
      }
    )
    cy.addNewMember()
    cy.get('[data-cy="დაამატე წევრი"]').click()
    cy.beVisible('ბენდს ახალი წევრი შეემატა')
    cy.get('[data-cy="CloseIcon"]').click()
    cy.get("[data-cy='name']").should('have.value', '')
    cy.get("[data-cy='biography']").should('have.value', '')
  })

  it('if there is error while adding new member show alert', () => {
    cy.addMemberForm()
    cy.intercept(
      'POST',
      'https://folksoul-api.sabavar.redberryinternship.ge/add-member',
      {
        statusCode: 404,
      }
    )
    cy.addNewMember()
    cy.get('[data-cy="დაამატე წევრი"]').click()
    cy.beVisible('წევრი ვერ მოიძებნა')
  })

  it('if url does not contain page param redirect to page 1', () => {
    cy.addMemberForm()
    cy.visit('/Dashboard/Members')
    cy.url().should('include', 'Members?page=1')
  })

  it('if band already have the same band member then show alert and do not save new one', () => {
    cy.intercept(
      'POST',
      'https://folksoul-api.sabavar.redberryinternship.ge/add-member',
      {
        statusCode: 409,
      }
    )
    cy.addMemberForm()
    cy.addNewMember()
    cy.get('[data-cy="დაამატე წევრი"]').click()
    cy.beVisible('წევრი უკვე ბენდშია').wait(1000)
  })

  it('if band have more than 3 members we should see pagination', () => {
    cy.memberTwoPage()
    cy.beVisible('წევრი')
    cy.contains('წევრი4').should('not.exist')
    cy.get('[data-cy="2"]').click()
    cy.beVisible('წევრი4')
    cy.get('[data-cy="1"]').click()
    cy.beVisible('წევრი3')
  })

  it('when click on the green button should see details of current member', () => {
    cy.getAllMembers()
    cy.get('[data-cy="GreenBtn"]').click()
    cy.beVisible('სახელი')
    cy.beVisible('300')
    cy.beVisible('გიტარა')
    cy.beVisible('დაიბადა ...')
  })

  it('if there is one member on the page and we delete it then should redirect to previous page', () => {
    cy.memberTwoPage()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="RedBtn"]').click()
    cy.beVisible('წავშალოთ ბენდის წევრი?')
    cy.get('[data-cy="DeleteNo"]').click()
    cy.contains('წავშალოთ ბენდის წევრი?').should('not.exist')
    cy.get('[data-cy="RedBtn"]').click()
    cy.intercept(
      'DELETE',
      'https://folksoul-api.sabavar.redberryinternship.ge/delete-member',
      {
        statusCode: 200,
      }
    )
    cy.get('[data-cy="DeleteYes"]').click()
  })

  it('when click on the red button should see delete dialog', () => {
    cy.getAllMembers()
    cy.get('[data-cy="RedBtn"]').click()
    cy.beVisible('წავშალოთ ბენდის წევრი?')
    cy.get('[data-cy="DeleteNo"]').click()
    cy.contains('წავშალოთ ბენდის წევრი?').should('not.exist')
    cy.get('[data-cy="RedBtn"]').click()
    cy.intercept(
      'DELETE',
      'https://folksoul-api.sabavar.redberryinternship.ge/delete-member',
      {
        statusCode: 200,
      }
    )
    cy.get('[data-cy="DeleteYes"]').click()
  })

  it('when click on the camera icon then should see modal to upload avatar', () => {
    cy.getAllMembers()
    cy.intercept(
      'PATCH',
      'https://folksoul-api.sabavar.redberryinternship.ge/upload-member-image',
      {
        statusCode: 201,
      }
    )
    cy.get('[data-cy="CameraBtn"]').click({ force: true })
    cy.beVisible('შეცვალე ჯგუფის წევრის ავატარი')
    cy.beVisible('ატვირთე')
    cy.get('[data-cy="UploadMemberImage"]').click()
    cy.get('input[type=file]').selectFile('src/assets/images/avatar1.png', {
      force: true,
    })
    cy.get('[data-cy="SaveBtn"]').click()
    cy.contains('შეცვალე ჯგუფის წევრის ავატარი').should('not.exist')
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

  it('if member deletion fails should see error alert', () => {
    cy.getAllMembers()
    cy.get('[data-cy="RedBtn"]').click()
    cy.beVisible('წავშალოთ ბენდის წევრი?')
    cy.get('[data-cy="DeleteNo"]').click()
    cy.contains('წავშალოთ ბენდის წევრი?').should('not.exist')
    cy.get('[data-cy="RedBtn"]').click()
    cy.intercept(
      'DELETE',
      'https://folksoul-api.sabavar.redberryinternship.ge/delete-member',
      {
        statusCode: 404,
      }
    )
    cy.get('[data-cy="DeleteYes"]').click()
  })

  it('when fetch of member details fails show error alert', () => {
    cy.getAllMembers()
    cy.intercept(
      'POST',
      'https://folksoul-api.sabavar.redberryinternship.ge/get-one-member',
      {
        statusCode: 404,
      }
    )
    cy.get('[data-cy="ChangeInfo"]').click()
    cy.beVisible('ინფორმაცია ვერ მოიძებნა')
  })

  it('if image upload fails should see error alert', () => {
    cy.getAllMembers()
    cy.intercept(
      'PATCH',
      'https://folksoul-api.sabavar.redberryinternship.ge/upload-member-image',
      {
        statusCode: 404,
      }
    )
    cy.get('[data-cy="CameraBtn"]').click({ force: true })
    cy.beVisible('შეცვალე ჯგუფის წევრის ავატარი')
    cy.beVisible('ატვირთე')
    cy.get('[data-cy="UploadMemberImage"]').click()
    cy.get('input[type=file]').selectFile('src/assets/images/avatar1.png', {
      force: true,
    })
    cy.get('[data-cy="SaveBtn"]').click()
    cy.beVisible('შეცვალე ჯგუფის წევრის ავატარი')
  })

  it('if member data fetching fails show error alert', () => {
    cy.intercept(
      'GET',
      'https://folksoul-api.sabavar.redberryinternship.ge/all-members?page=1',
      {
        statusCode: 404,
      }
    ).wait(2000)
    cy.beVisible('ინფორმაცია ვერ მოიძებნა')
  })
})
