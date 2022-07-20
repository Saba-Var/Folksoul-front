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

export const deleteMemberFromBand = (
  id: string,
  token: string
): Promise<Status> => {
  return axios.delete(`/delete-member?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const addMemberToBand = (
  data: MemberIfo,
  token: string
): Promise<Status> => {
  return axios.post('/add-member', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const changeBandMember = (
  data: ChangeMember,
  token: string
): Promise<Status> => {
  return axios.put('/change-member', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const getOneMemberData = (
  id: string,
  token: string
): Promise<OneMemberRes> => {
  return axios.get(`/get-one-member?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
