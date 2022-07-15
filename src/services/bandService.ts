import { BandInfoData } from 'services/types'
import axios from 'services'

export const getBandInfoData = (): Promise<BandInfoData> => {
  return axios.get('/band-about')
}

export const editBandInfo = (
  about: string,
  id: string
): Promise<{ status: number }> => {
  return axios.put('/change-band-about', { about, id })
}
