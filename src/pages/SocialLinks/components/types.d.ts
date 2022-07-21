import { Dispatch, SetStateAction } from 'react'
import { AllLinks } from 'pages/SocialLinks'

type SetSection = Dispatch<SetStateAction<string>>

type SetLinks = Dispatch<SetStateAction<AllLinks>>

type Show = Dispatch<SetStateAction<boolean>>

export type LinksData = {
  setLinkId: Dispatch<SetStateAction<string>>
  setSection: SetSection
  setLinks: SetLinks
  links: AllLinks
}

export type DeleteLinkProps = {
  setLinks: SetLinks
  links: AllLinks
  id: string
}

export type FormData = SubmitHandler<{
  linkName: string
  url: string
}>

export type DeleteDialogProps = {
  setShowModal: Show
  setLinks: SetLinks
  id: string
}

export type DetailsProps = {
  linkName: string
  url: string
}

export type ChangeIconProps = {
  image: string | undefined
  setLinks: SetLinks
  linkName: string
  id: string
}

export type AddLinkFormProps = {
  setSection: SetSection
  setLinks: SetLinks
}

export type ChangeLinkProps = {
  setSection: SetSection
  setLinks: SetLinks
  links: AllLinks
  id: string
}

export type LinkInputProps = {
  register: UseFormRegister<FieldValues>
  errors: FieldError | undefined
  placeholder: string
  inputName: string
}

export type FormNotificationsProps = {
  errorAlert: boolean
  setErrorAlert: Show
  setShowModal: Show
  showModal: boolean
  name: string
}
