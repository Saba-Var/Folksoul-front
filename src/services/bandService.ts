import axios, { Status, EditBandInfo } from 'services'
import { BandData } from 'pages/About'
import { AxiosResponse } from 'axios'

export const getBandInfoData = (): Promise<AxiosResponse<BandData>> => {
  return axios.get('/band-about')
}

export const editBandInfo = (
  data: EditBandInfo,
  token: string
): Promise<AxiosResponse<Status>> => {
  return axios.put('/change-band-about', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
