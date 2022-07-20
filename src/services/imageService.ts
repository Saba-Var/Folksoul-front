import axios, { Status } from 'services'

export const imageUpload = (
  type: string,
  formData: FormData,
  token: string
): Promise<Status> => {
  return axios.patch(`/upload-${type}-image`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
