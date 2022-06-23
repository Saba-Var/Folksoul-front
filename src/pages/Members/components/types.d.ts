import { MemberData } from 'types'

type fetchUtilities = { setMembersData: any; setIsLoading: any }

export type CardData = {
  data: MemberData
  fetchUtilities: fetchUtilities
}

export type PaginationLinkProps = {
  fetchUtilities: fetchUtilities
  page: number
}

export type MemberCardProps = {
  fetchUtilities: fetchUtilities
  id: string
  avatar: string
  name: string
}

export type DeleteDialogProps = {
  setShowModal: (show: boolean) => void
  userId: string
  fetchUtilities: fetchUtilities
}
