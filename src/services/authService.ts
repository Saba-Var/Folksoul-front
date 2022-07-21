import { UserData } from 'pages/Login/components'
import { AuthResponse } from 'services'
import axios from 'services'

export const authenticateUser = (data: UserData): Promise<AuthResponse> => {
  return axios.post('/auth', data)
}
