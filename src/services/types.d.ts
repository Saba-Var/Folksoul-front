import { BandData } from 'pages/About'

export type Status = { status: number }

export type BandInfoData = {
  status: number
  data: BandData
}

export type AuthResponse = {
  status: number
  token: string
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

export type ChangeMember = {
  orbitLength: number
  instrument: string
  biography: string
  color: string
  name: string
  id: string
}
