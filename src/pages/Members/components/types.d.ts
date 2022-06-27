import { MemberData } from 'types'

type fetchUtilities = { setMembersData: any; setIsLoading: any }

export type CardData = {
  setIsLoading?: (loading: boolean) => void
  setSection?: (section: string) => void
  setMemberId?: (show: string) => void
  data: MemberData
  fetchUtilities: fetchUtilities
}

export type PaginationLinkProps = {
  fetchUtilities: fetchUtilities
  page: number
}

export type InputsProps = { errors: any; register: any; title: string }

export type MembersInfo = {
  biography: string
  color: string
  instrument: string
  name: string
  orbitLength: number
  _id: string
  image?: string
}[]

export type MemberCardProps = {
  setIsLoading: (loading: boolean) => void
  setSection: (section: string) => void
  setMemberId: (show: string) => void
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
  setSection: (section: string) => void
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
  image?: string
}

export type DetailModal = {
  currentMember: MemberIfo
  avatar: string
  setMemberModal: (show: boolean) => void
}

export type AvatarModalProps = {
  url: string
  setIsLoading: (loading: boolean) => void
  setMembersData: any
  id: string
  currentMember: MemberIfo | undefined
  avatar: string
  setAvatarModal: (show: boolean) => void
}

export type DeleteMemberProps = {
  userId: string
  fetchUtilities: {
    setMembersData: any
    setIsLoading: any
  }
  membersData: MembersInfo
}

export type MemberDetails = {
  setSection: (section: string) => void
  action: string
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

export type NotificationsProps = {
  showModal: boolean
  action: string
  setShowModal: (show: boolean) => void
  showErrorAlert: boolean
  setShowErrorAlert: (show: boolean) => void
  statusCode: number
}

export type MemberInputProps = {
  id: string
  setSection: (section: string) => void
  setMembersData: any
  setIsLoading: (loading: boolean) => void
}
