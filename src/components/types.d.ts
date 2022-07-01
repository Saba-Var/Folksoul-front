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

export type ErrorAlertProps = {
  setShowAlert: (show: boolean) => void
  title: string
  styles?: string
}

export type DirectBtnProps = {
  goTo: string
  title: string
  direction: (add: string) => void
}

export type InputFieldProps = {
  minLength?: number
  type: string
  register: any
  inputName: string
  placeholder: string
  errors: any
}

export type addOrMemberInputs = {}

export type ImageUploadProps = {
  url: string
  setLinks: setLinks
  id: string
  title: string
  setImageModal: (show: boolean) => void
  children: JSX.Element
}

export type AddNotificationProps = {
  setShowModal: (show: boolean) => void
  modalText: string
}
