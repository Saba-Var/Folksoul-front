type Show = (show: boolean) => void

export type FileType = Blob | string

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
  setFile?: (file: string) => void
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
  errors: FieldError | undefined
  placeholder: string
  minLength?: number
  inputName: string
  type: string
}

export type ImageUploadProps = {
  setFile: (file: string | Blob) => void
  children: JSX.Element
  setImageModal: Show
  setLinks: setLinks
  title: string
  file: string
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

export type ColorInputProps = {
  register: UseFormRegister<FieldValues>
  colorValue: string | undefined
  errors: FieldError | undefined
}
