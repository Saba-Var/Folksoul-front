import { BandAbout } from 'helper/types'

export type BandInfoProps = {
  id: string
  setBandAbout: (data: BandAbout) => void
  isLoading: boolean
  about: string
  image?: string | undefined
}

export type BandImageProps = {
  id: string
  setBandAbout: (data: BandAbout) => void
  isLoading: boolean
  image: string | undefined
}

export type EditInfoProps = {
  setBandAbout: (data: BandAbout) => void
  id: string
  setSection: (section: string) => void
  about: string
}

export type ImageProps = {
  styles: string
  image: string | undefined
  isLoading: boolean
}
