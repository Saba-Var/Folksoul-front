import axios, { Status, ChangeLink, AllLinksRes } from 'services'
import { DetailsProps } from 'pages/SocialLinks/components'

export const getLinksData = (): Promise<AllLinksRes> => {
  return axios.get('/all-links')
}

export const deleteSocialLink = (id: string): Promise<Status> => {
  return axios.delete('/delete-link', { id })
}

export const addSocialLink = (data: DetailsProps): Promise<Status> => {
  return axios.post('/add-social-link', data)
}

export const changeSocialLink = (data: ChangeLink): Promise<Status> => {
  return axios.put('/change-link', data)
}
