type Image = string | undefined

type SetString = (string: string) => void

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
  animationDuration: number
  setInfoImage: SetString
  setInfoText: SetString
  imageArray: string[]
  setColor: SetString
  biography: string
  pause: boolean
  color: string
  index: number
  name: string
  image: Image
}

export type ImageProps = {
  imageArray: string[]
  isSelected: boolean
  color: string
  index: number
  image: Image
}
