import { Dispatch, SetStateAction } from 'react'
import { MemberData } from 'types'

type SetMembersData = Dispatch<SetStateAction<MemberData>>

type SetIsLoading = Dispatch<SetStateAction<boolean>>

type setSection = Dispatch<SetStateAction<string>>

type fetchUtilities = {
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
}

export type CardData = {
  setMemberId?: Dispatch<SetStateAction<string>>
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
  register: UseFormRegister<FieldValues>
  errors: FieldError | undefined
  colorValue?: string
  title: string
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
  setMemberId: Dispatch<SetStateAction<string>>
  fetchUtilities: fetchUtilities
  setIsLoading: SetIsLoading
  membersData: MembersInfo
  setSection: setSection
  avatar: string
  name: string
  id: string
}

export type DeleteDialogProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>
  fetchUtilities: fetchUtilities
  membersData: MembersInfo
  userId: string
}

export type AddMemberProps = {
  setAddMember: Dispatch<SetStateAction<boolean>>
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
  membersData: MembersInfo
  setSection: setSection
}

export type MemberIfo = {
  orbitLength: number | string
  instrument: string
  biography: string
  image?: string
  color: string
  name: string
}

export type DetailModal = {
  setMemberModal: Dispatch<SetStateAction<boolean>>
  currentMember: MemberIfo
  avatar: string
}

export type AvatarModalProps = {
  setAvatarModal: Dispatch<SetStateAction<boolean>>
  currentMember: MemberIfo | undefined
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
  avatar: string
  url: string
  id: string
}

export type DeleteMemberProps = {
  fetchUtilities: {
    setMembersData: SetMembersData
    setIsLoading: SetIsLoading
  }
  membersData: MembersInfo
  userId: string
}

export type MemberDetails = {
  setAddMember: Dispatch<SetStateAction<boolean>>
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
  membersData: MembersInfo
  setSection: setSection
  details: MemberIfo
  action: string
}

export type TextareaProps = {
  register: UseFormRegister<FieldValues>
  errors: FieldError | undefined
  placeholder: string
  inputName: string
}

export type NotificationsProps = {
  setShowErrorAlert: Dispatch<SetStateAction<boolean>>
  setShowModal: Dispatch<SetStateAction<boolean>>
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
