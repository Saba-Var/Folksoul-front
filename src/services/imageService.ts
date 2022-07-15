import axios, { Status, ImageData } from 'services'

export const imageUpload: ImageData = (url, formData): Promise<Status> => {
  return axios.patch(url, formData)
}
