import { Dispatch, SetStateAction } from 'react'
import { AllLinks } from 'pages/SocialLinks'
import { BandData } from 'pages/About'
import { MemberData } from 'types'

export type GeorgianWord = (text: string, inputName: string) => boolean

export type LongTextFormat = (text: string, length: number) => string

export type SetMembersData = Dispatch<SetStateAction<MemberData>>

export type SetIsLoading = Dispatch<SetStateAction<boolean>>

export type SetSocialLinks = Dispatch<SetStateAction<AllLinks>>

export type SetBandAbout = Dispatch<SetStateAction<BandAbout>>

export type BandAboutText = Dispatch<SetStateAction<string>>

export type setBandAbout = Dispatch<SetStateAction<BandData>>

export type SetErrorAlert = Dispatch<SetStateAction<boolean>>

export type BandImage = Dispatch<SetStateAction<string>>

export type FetchMembersData = (
  setErrorAlert: SetErrorAlert,
  setMembersData: SetMembersData,
  setIsLoading: SetIsLoading,
  page?: number
) => void

export type FetchBandAbout = (
  setErrorAlert: SetErrorAlert,
  setBandAbout: setBandAbout,
  setIsLoading?: SetIsLoading,
  setImage?: BandImage
) => void

export type FetchSocialLinks = (
  setErrorAlert: SetErrorAlert,
  setSocialLinks: SetSocialLinks,
  setIsLoading?: SetIsLoading
) => void

export type MemberDetails = {
  orbitLength: number
  instrument: string
  biography: string
  color: string
  name: string
}

type Show = Dispatch<SetStateAction<boolean>>

export type changeMemberParams = {
  setStatusCode: Dispatch<SetStateAction<number>>
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
