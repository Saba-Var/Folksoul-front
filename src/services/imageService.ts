import axios, { Status } from 'services'

export const imageUpload = (
  type: string,
  formData: FormData
): Promise<Status> => {
  return axios.patch(`/upload-${type}-image`, formData)
}
