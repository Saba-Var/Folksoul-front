import axios, { AuthResponse } from 'services'
import { AxiosResponse } from 'axios'
import { UserData } from 'pages'

export const authenticateUser = (
  data: UserData
): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post('/auth', data)
}
