type BandAbout = {
  image?: string | undefined
  about: string
  _id: string
}[]

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
  isLoading: boolean
  styles: string
  file?: any
}
