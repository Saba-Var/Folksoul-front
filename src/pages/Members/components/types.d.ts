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

export type MembersInfo = {
  biography: string
  color: string
  instrument: string
  name: string
  orbitLength: number
  _id: string
}[]

export type MemberCardProps = {
  membersData: MembersInfo
  fetchUtilities: fetchUtilities
  id: string
  avatar: string
  name: string
}

export type DeleteDialogProps = {
  membersData: MembersInfo
  setShowModal: (show: boolean) => void
  userId: string
  fetchUtilities: fetchUtilities
}

export type AddMemberProps = {
  membersData: MembersInfo
  memberCount: number
  setAddMember: (add: boolean) => void
  setMembersData: (data: MemberData) => void
  setIsLoading: (loading: boolean) => void
}

export type MemberIfo = {
  biography: string
  color: string
  instrument: string
  name: string
  orbitLength: string | number
}

export type MemberDetails = {
  membersData: MembersInfo
  setAddMember: (add: boolean) => void
  details: MemberIfo
  url: string
  setMembersData: (data: MemberData) => void
  setIsLoading: (loading: boolean) => void
}

export type TextareaProps = {
  inputName: string
  placeholder: string
  register: any
  errors: any
}
