import { MemberIfo } from 'pages/Members/components'
import axios, {
  AllMemberRes,
  ChangeMember,
  OneMemberRes,
  Status,
} from 'services'

export const getMembersData = (uri: string): Promise<AllMemberRes> => {
  return axios.get(uri)
}

export const deleteMemberFromBand = (uri: string): Promise<Status> => {
  return axios.delete(uri)
}

export const addMemberToBand = (data: MemberIfo): Promise<Status> => {
  return axios.post('/add-member', data)
}

export const changeBandMember = (data: ChangeMember): Promise<Status> => {
  return axios.put('/change-member', data)
}

export const getOneMemberData = (url: string): Promise<OneMemberRes> => {
  return axios.get(url)
}
