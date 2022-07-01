import { BandAbout } from 'helper/types'

export type BandInfoProps = {
  isLoading: boolean
  about: string
  image?: string | undefined
}

export type BandImageProps = {
  isLoading: boolean
  image: string | undefined
}

export type EditInfoProps = {
  setBandAbout: (data: BandAbout) => void
  id: string
  setSection: (section: string) => void
  about: string
}
