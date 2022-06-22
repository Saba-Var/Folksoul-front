export type MemberData = {
  members: {
    biography: string
    color: string
    instrument: string
    name: string
    orbitLength: number
    _id: string
  }[]
  paginationInfo: {
    currentPage: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    lastPage: number
    nextPage: number
    previousPage: number
  }
}
