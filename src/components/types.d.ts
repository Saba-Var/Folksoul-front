type Show = (show: boolean) => void

export type PurpleBackgroundProps = {
  styles: string
}

export type WhiteWrapperProps = {
  children: JSX.Element
  style?: string
}

export type SectionWrapperProps = {
  children: JSX.Element
  title: string
}

export type ModalProps = {
  children: JSX.Element
  setShowModal: Show
  title: string
}

export type ErrorAlertProps = {
  setShowAlert: Show
  styles?: string
  title: string
}

export type DirectBtnProps = {
  direction: (add: string) => void
  title: string
  goTo: string
}

export type InputFieldProps = {
  register: UseFormRegister<FieldValues>
  placeholder: string
  minLength?: number
  inputName: string
  type: string
  errors: any
}

export type ImageUploadProps = {
  setFileExists?: (exist: boolean) => void
  children: JSX.Element
  setImageModal: Show
  setLinks: setLinks
  title: string
  url: string
  id: string
}

export type AddNotificationProps = {
  setShowModal: Show
  modalText: string
  title: string
}

export type DeleteContentProps = {
  deleteMember: () => void
  closeModal: () => void
  text: string
}
