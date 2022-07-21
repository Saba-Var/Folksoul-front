import { Dispatch, SetStateAction } from 'react'
import { BandAbout } from 'helpers'

type SetBandAbout = Dispatch<SetStateAction<BandAbout>>

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
  setSection: Dispatch<SetStateAction<string>>
  setBandAbout: SetBandAbout
  about: string
  id: string
}

export type ImageProps = {
  image: string | undefined
  file?: File | null
  isLoading: boolean
  styles: string
}
