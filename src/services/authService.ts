import { UserData } from 'pages/Login/components'
import axios, { AuthResponse } from 'services'
import { AxiosResponse } from 'axios'

export const authenticateUser = (
  data: UserData
): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post('/auth', data)
}
