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
  id: string
  avatar: string
  name: string
}

export type DeleteDialogProps = {
  setShowModal: (show: boolean) => void
}
