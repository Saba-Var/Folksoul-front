import { Dispatch, SetStateAction } from 'react'

type SetString = Dispatch<SetStateAction<string>>

type ImageType = string | undefined

type MemberDetails = {
  orbitLength: number
  instrument: string
  biography: string
  image?: string
  color: string
  name: string
  _id: string
}

export type ChildrenProps = {
  children: JSX.Element
}

export type InfoProps = {
  isLoading: boolean
  infoText: string
  image?: string
  color: string
}

export type BandImageSquareProps = {
  color: string
  image: Image
}

export type SolarSystemProps = {
  setInfoImage: SetString
  setInfoText: SetString
  imageArray: string[]
  setColor: SetString
  bandInfo: string
  image: string
}

export type MemberImageProps = {
  selectUtils: {
    setSelectedId: Dispatch<SetStateAction<string>>
    selectedId: string
    id: string
  }
  setPause: Dispatch<SetStateAction<boolean>>
  memberDetails: MemberDetails
  animationDuration: number
  setInfoImage: SetString
  setInfoText: SetString
  imageArray: string[]
  setColor: SetString
  pause: boolean
  index: number
}

export type HomeImageProps = {
  imageArray: string[]
  isSelected: boolean
  color: string
  index: number
  image: Image
}

export type SunoteProps = {
  setPause: Dispatch<SetStateAction<boolean>>
  setSelectedId: SetString
  setInfoImage: SetString
  setInfoText: SetString
  bandInfo: string
  pause: boolean
  image: string
}
