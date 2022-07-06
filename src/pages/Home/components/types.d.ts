type Image = string | undefined

type SetString = (string: string) => void

type MemberDetails = {
  biography: string
  color: string
  image: string
  instrument: string
  name: string
  orbitLength: number
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
    id: string
    selectedId: string
    setSelectedId: (id: string) => void
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
