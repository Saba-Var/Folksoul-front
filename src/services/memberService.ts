import axios, { ChangeMember, Status } from 'services'
import { AxiosResponse } from 'axios'
import { MemberData } from 'types'
import { MemberIfo } from 'pages'

export const getMembersData = (
  param: string
): Promise<AxiosResponse<MemberData>> => {
  return axios.get(`/all-members${param}`)
}

export const deleteMemberFromBand = (
  id: string,
  token: string
): Promise<AxiosResponse<Status>> => {
  return axios.delete(`/delete-member?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const addMemberToBand = (
  data: MemberIfo,
  token: string
): Promise<AxiosResponse<Status>> => {
  return axios.post('/add-member', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const changeBandMember = (
  data: ChangeMember,
  token: string
): Promise<AxiosResponse<Status>> => {
  return axios.put('/change-member', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const getOneMemberData = (
  id: string,
  token: string
): Promise<AxiosResponse<MemberIfo>> => {
  return axios.get(`/get-one-member?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
