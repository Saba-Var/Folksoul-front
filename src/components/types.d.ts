export type PurpleBackgroundProps = {
  styles: string
}

export type WhiteWrapperProps = {
  style?: string
  children: JSX.Element
}

export type SectionWrapperProps = {
  title: string
  children: JSX.Element
}

export type ModalProps = {
  title: string
  children: JSX.Element

  setShowModal: (show: boolean) => void
}
