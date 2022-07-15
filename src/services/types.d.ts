import { MemberIfo } from 'pages/Members/components'
import { AllLinks } from 'pages/SocialLinks'
import { BandData } from 'pages/About'

export type Status = { status: number }

export type BandInfoData = {
  status: number
  data: BandData
}

export type authResponse = {
  data: { token: string }
  status: number
}

export type EditBandInfo = {
  about: string
  id: string
}

export type ImageData = (url: string, formData: FormData) => Promise<Status>

export type ChangeLink = {
  linkName: string
  url: string
  id: string
}

export type AllLinksRes = {
  data: AllLinks
  status: number
}

export type AllMemberRes = {
  data: { members: [] }
  status: number
}

export type ChangeMember = {
  orbitLength: any
  instrument: any
  biography: any
  color: any
  name: any
  id: string
}

export type OneMemberRes = {
  status: number
  data: MemberIfo
}
