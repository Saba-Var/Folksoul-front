import { BandAbout } from 'helpers'

type SetBandAbout = (data: BandAbout) => void

export type BandInfoProps = {
  setBandAbout: SetBandAbout
  image?: string | undefined
  isLoading: boolean
  about: string
  id: string
}

export type BandImageProps = {
  setBandAbout: SetBandAbout
  image: string | undefined
  isLoading: boolean
  id: string
}

export type EditInfoProps = {
  setSection: (section: string) => void
  setBandAbout: SetBandAbout
  about: string
  id: string
}

export type ImageProps = {
  image: string | undefined
  file?: Blob | MediaSource | string
  isLoading: boolean
  styles: string
}
