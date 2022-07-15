import { MemberIfo } from 'pages/Members/components'
import axios from 'services'

export const getMembersData = (
  uri: string
): Promise<{
  status: number
  data: {}
}> => {
  return axios.get(uri)
}

export const deleteMemberFromBand = (
  id: string
): Promise<{
  status: number
}> => {
  return axios.delete('/delete-member', { id })
}

export const addMemberToBand = (
  data: MemberIfo
): Promise<{
  status: number
}> => {
  return axios.post('/add-member', data)
}

export const changeBandMember = (data: {
  orbitLength: any
  instrument: any
  biography: any
  color: any
  name: any
  id: string
}): Promise<{
  status: number
}> => {
  return axios.put('/change-member', data)
}

export const getOneMemberData = (
  url: string
): Promise<{
  status: number
  data: MemberIfo
}> => {
  return axios.get(url)
}
