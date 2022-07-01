import { MemberData } from '../types'

export type MemberDetails = {
  name: string
  instrument: string
  color: string
  orbitLength: number | string
  biography: string
}

export type changeMemberParams = {
  data: MemberData
  setShowModal: (show: boolean) => void
  setMembersData: (data: MemberData) => void
  setIsLoading: (loading: boolean) => void
  page: number
  setShowErrorAlert: (show: boolean) => void
  setStatusCode: (status: number) => void
}

export type BandAbout = {
  _id: string
  about: string
  image?: string | undefined
}[]
