import '@cypress/code-coverage/support'
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      memberPagination(data: object, page: number): Chainable<Element>
      isVisible(id: string): Chainable<JQuery<HTMLElement>>
      fetchSocialLinks(links: object): Chainable<Element>
      changeMemberRequests(): Chainable<Element>
      fetchOneMember(): Chainable<Element>
      addMemberForm(): Chainable<Element>
      getAllMembers(): Chainable<Element>
      stopRequests(): Chainable<Element>
      addNewMember(): Chainable<Element>
      memberTwoPage(): Chainable<Element>
    }
  }
}
