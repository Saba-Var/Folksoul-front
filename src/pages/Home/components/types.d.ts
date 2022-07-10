type Image = string | undefined

type SetString = (string: string) => void

type MemberDetails = {
  orbitLength: number
  instrument: string
  biography: string
  color: string
  image: string
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

export type BandImageProps = {
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
    setSelectedId: (id: string) => void
    selectedId: string
    id: string
  }
  setPause: (pause: boolean) => void
  memberDetails: MemberDetails
  animationDuration: number
  setInfoImage: SetString
  setInfoText: SetString
  imageArray: string[]
  setColor: SetString
  pause: boolean
  index: number
}

export type ImageProps = {
  imageArray: string[]
  isSelected: boolean
  color: string
  index: number
  image: Image
}

export type SunoteProps = {
  setPause: (pause: boolean) => void
  setSelectedId: SetString
  setInfoImage: SetString
  setInfoText: SetString
  bandInfo: string
  pause: boolean
  image: string
}
