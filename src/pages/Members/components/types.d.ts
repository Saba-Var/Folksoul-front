import { MemberData } from 'types'

type SetMembersData = (data: MemberData) => void

type SetIsLoading = (loading: boolean) => void

type setSection = (section: string) => void

type fetchUtilities = {
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
}

export type CardData = {
  setMemberId?: (show: string) => void
  fetchUtilities: fetchUtilities
  setIsLoading?: SetIsLoading
  setSection?: setSection
  isLoading?: boolean
  data: MemberData
}

export type PaginationLinkProps = {
  fetchUtilities: fetchUtilities
  page: number
}

export type InputsProps = {
  colorValue?: string
  register: UseFormRegister<FieldValues>
  title: string
  errors: any
}

export type MembersInfo = {
  orbitLength: number
  instrument: string
  biography: string
  image?: string
  color: string
  name: string
  _id: string
}[]

export type MemberCardProps = {
  setMemberId: (show: string) => void
  fetchUtilities: fetchUtilities
  setIsLoading: SetIsLoading
  membersData: MembersInfo
  setSection: setSection
  avatar: string
  name: string
  id: string
}

export type DeleteDialogProps = {
  setShowModal: (show: boolean) => void
  fetchUtilities: fetchUtilities
  membersData: MembersInfo
  userId: string
}

export type AddMemberProps = {
  setAddMember: (add: boolean) => void
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
  membersData: MembersInfo
  setSection: setSection
}

export type MemberIfo = {
  orbitLength: string | number
  instrument: string
  biography: string
  image?: string
  color: string
  name: string
}

export type DetailModal = {
  setMemberModal: (show: boolean) => void
  currentMember: MemberIfo
  avatar: string
}

export type AvatarModalProps = {
  setAvatarModal: (show: boolean) => void
  currentMember: MemberIfo | undefined
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
  avatar: string
  url: string
  id: string
}

export type DeleteMemberProps = {
  membersData: MembersInfo
  fetchUtilities: {
    setMembersData: SetMembersData
    setIsLoading: SetIsLoading
  }
  userId: string
}

export type MemberDetails = {
  setAddMember: (add: boolean) => void
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
  membersData: MembersInfo
  setSection: setSection
  details: MemberIfo
  action: string
}

export type TextareaProps = {
  register: UseFormRegister<FieldValues>
  placeholder: string
  inputName: string
  errors: any
}

export type NotificationsProps = {
  setShowErrorAlert: (show: boolean) => void
  setShowModal: (show: boolean) => void
  showErrorAlert: boolean
  showModal: boolean
  statusCode: number
}

export type MemberInputProps = {
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
  setSection: setSection
  id: string
}
