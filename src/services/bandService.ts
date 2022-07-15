import { BandInfoData, Status, EditBandInfo } from 'services'
import axios from 'services'

export const getBandInfoData = (): Promise<BandInfoData> => {
  return axios.get('/band-about')
}

export const editBandInfo = (data: EditBandInfo): Promise<Status> => {
  return axios.put('/change-band-about', data)
}
