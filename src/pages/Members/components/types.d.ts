import { MemberData } from 'types'

export type CardData = {
  data: MemberData
  setMembersData: any
  setIsLoading: any
}

export type PaginationLinkProps = {
  setMembersData: any
  setIsLoading: any
  page: number
}
