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

export type MemberCardProps = {
  setMembersData: any
  setIsLoading: any
  id: string
  avatar: string
  name: string
}

export type DeleteDialogProps = {
  setShowModal: (show: boolean) => void
  userId: string
  setMembersData: any
  setIsLoading: any
}
