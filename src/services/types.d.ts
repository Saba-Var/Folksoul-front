import { MemberIfo } from 'pages/Members/components'
import { AllLinks } from 'pages/SocialLinks'
import { BandData } from 'pages/About'
import { MemberData } from 'types'

export type Status = { status: number }

export type BandInfoData = {
  status: number
  data: BandData
}

export type AuthResponse = {
  token: string
  status: number
}

export type EditBandInfo = {
  about: string
  id: string
}

export type ChangeLink = {
  linkName: string
  url: string
  id: string
}

export type AllLinksRes = {
  status: number
  data: AllLinks
}

export type AllMemberRes = {
  data: MemberData
  status: number
}

export type ChangeMember = {
  orbitLength: number
  instrument: string
  biography: string
  color: string
  name: string
  id: string
}

export type OneMemberRes = {
  status: number
  data: MemberIfo
}
