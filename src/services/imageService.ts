import axios, { Status } from 'services'
import { AxiosResponse } from 'axios'

export const imageUpload = (
  type: string,
  formData: FormData,
  token: string
): Promise<AxiosResponse<Status>> => {
  return axios.patch(`/upload-${type}-image`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
