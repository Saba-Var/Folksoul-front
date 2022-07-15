import { DetailsProps } from 'pages/SocialLinks/components'
import { AllLinks } from 'pages/SocialLinks'
import axios from 'services'

export const getLinksData = (): Promise<{
  status: number
  data: AllLinks
}> => {
  return axios.get('/all-links')
}

export const deleteSocialLink = (
  id: string
): Promise<{
  status: number
}> => {
  return axios.delete('/delete-link', { id })
}

export const addSocialLink = (
  data: DetailsProps
): Promise<{
  status: number
}> => {
  return axios.post('/add-social-link', data)
}

export const changeSocialLink = (data: {
  linkName: string
  url: string
  id: string
}): Promise<{
  status: number
}> => {
  return axios.put('/change-link', data)
}
