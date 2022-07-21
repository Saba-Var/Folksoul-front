import { DetailsProps } from 'pages/SocialLinks/components'
import axios, { Status, ChangeLink } from 'services'
import { AllLinks } from 'pages/SocialLinks'
import { AxiosResponse } from 'axios'

export const getLinksData = (): Promise<AxiosResponse<AllLinks>> => {
  return axios.get('/all-links')
}

export const deleteSocialLink = (
  id: string,
  token: string
): Promise<AxiosResponse<Status>> => {
  return axios.delete(`/delete-link?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const addSocialLink = (
  data: DetailsProps,
  token: string
): Promise<AxiosResponse<Status>> => {
  return axios.post('/add-social-link', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const changeSocialLink = (
  data: ChangeLink,
  token: string
): Promise<AxiosResponse<Status>> => {
  return axios.put('/change-link', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
