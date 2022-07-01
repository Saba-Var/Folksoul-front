import { AllLinks } from 'pages/SocialLinks/types'

type setLinks = (data: AllLinks) => void

export type LinksData = {
  setLinkId: (id: string) => void
  setSection: (section: string) => void
  links: AllLinks
  setLinks: setLinks
}

export type DeleteLinkProps = {
  id: string
  links: AllLinks
  setLinks: setLinks
}

export type DeleteDialogProps = {
  setLinks: setLinks
  id: string
  setShowModal: (show: boolean) => void
}

export type DetailsProps = {
  linkName: string
  url: string
}

export type ChangeIconProps = {
  setLinks: setLinks
  linkName: string
  id: string
  image: string | undefined
}

export type AddLinkFormProps = {
  setLinks: setLinks
  setSection: (section: string) => void
}

export type ChangeLinkProps = {
  id: string
  links: AllLinks
  setLinks: setLinks
  setSection: (section: string) => void
}

export type LinkInputProps = {
  placeholder: string
  inputName: string
  register: any
  errors: any
}

export type FormNotificationsProps = {
  successText: string
  title: string
  showModal: boolean
  setShowModal: (show: boolean) => void
  errorAlert: boolean
  setErrorAlert: (show: boolean) => void
}

export type FormData = SubmitHandler<{
  linkName: string
  url: string
}>
