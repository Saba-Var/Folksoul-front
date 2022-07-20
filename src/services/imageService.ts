import axios, { Status, ImageData } from 'services'

export const imageUpload: ImageData = (type, formData): Promise<Status> => {
  return axios.patch(`/upload-${type}-image`, formData)
}
