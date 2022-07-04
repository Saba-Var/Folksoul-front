export type ChildrenProps = {
  children: JSX.Element
}

export type InfoProps = {
  isLoading: boolean
  infoText: string
  image?: string
}

export type BandImageProps = {
  image: string | undefined
}

export type SolarSystemProps = { setInfoText: (text: string) => void }
