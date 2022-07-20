import { MemberIfo } from 'pages/Members/components'
import axios, {
  AllMemberRes,
  ChangeMember,
  OneMemberRes,
  Status,
} from 'services'

export const getMembersData = (param: string): Promise<AllMemberRes> => {
  return axios.get(`/all-members${param}`)
}

export const deleteMemberFromBand = (id: string): Promise<Status> => {
  return axios.delete(`/delete-member?id=${id}`)
}

export const addMemberToBand = (data: MemberIfo): Promise<Status> => {
  return axios.post('/add-member', data)
}

export const changeBandMember = (data: ChangeMember): Promise<Status> => {
  return axios.put('/change-member', data)
}

export const getOneMemberData = (id: string): Promise<OneMemberRes> => {
  return axios.get(`/get-one-member?id=${id}`)
}
