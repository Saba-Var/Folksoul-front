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

export type GoBackBtnProps = {
  goTo: boolean
  title: string
  direction: (add: boolean) => void
}

export type InputFieldProps = {
  minLength?: number
  type: string
  register: any
  inputName: string
  placeholder: string
  errors: any
}

export type addOrChangeMember = {}
