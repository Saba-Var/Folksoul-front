export type MemberData = {
  members: {
    orbitLength: number
    instrument: string
    biography: string
    image?: string
    color: string
    name: string
    _id: string
  }[]
  paginationInfo: {
    totalMembers: number
  }
}
