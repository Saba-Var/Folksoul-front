import axios from 'services'

export const imageUpload = (
  url: string,
  formData: FormData
): Promise<{ status: number }> => {
  return axios.patch(url, formData)
}
