import axios, { Status, ChangeLink, AllLinksRes } from 'services'
import { DetailsProps } from 'pages/SocialLinks/components'

export const getLinksData = (): Promise<AllLinksRes> => {
  return axios.get('/all-links')
}

export const deleteSocialLink = (
  id: string,
  token: string
): Promise<Status> => {
  return axios.delete(`/delete-link?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const addSocialLink = (
  data: DetailsProps,
  token: string
): Promise<Status> => {
  return axios.post('/add-social-link', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const changeSocialLink = (
  data: ChangeLink,
  token: string
): Promise<Status> => {
  return axios.put('/change-link', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
