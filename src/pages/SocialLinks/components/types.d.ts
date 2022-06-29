import { AllLinks } from 'pages/SocialLinks/types'

type setLinks = (data: AllLinks) => void

export type LinksData = {
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
