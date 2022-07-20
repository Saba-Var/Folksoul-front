import { AllLinks } from 'pages/SocialLinks'
import { BandData } from 'pages/About'
import { MemberData } from 'types'

export type SetMembersData = (data: MemberData) => void

export type SetIsLoading = (loading: boolean) => void

export type SetSocialLinks = (data: AllLinks) => void

export type SetBandAbout = (data: BandAbout) => void

export type BandAboutText = (about: string) => void

export type setBandAbout = (data: BandData) => void

export type SetErrorAlert = (show: boolean) => void

export type BandImage = (image: string) => void

export type FetchMembersData = (
  setErrorAlert: SetErrorAlert,
  setMembersData: (data: MemberData) => void,
  setIsLoading: SetIsLoading,
  page?: number
) => void

type Show = (show: boolean) => void

export type MemberDetails = {
  orbitLength: number | string
  instrument: string
  biography: string
  color: string
  name: string
}

export type changeMemberParams = {
  setStatusCode: (status: number) => void
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
  setShowErrorAlert: Show
  setShowModal: Show
  data: MemberData
  page: number
}

export type BandAbout = {
  image?: string | undefined
  about: string
  _id: string
}[]

export type FetchMembers = {
  setMembersData: SetMembersData
  setIsLoading: SetIsLoading
  page: number
}
