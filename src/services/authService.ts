import { UserData } from 'pages/Login/components'
import { authResponse } from 'services'
import axios from 'services'

export const authenticateUser = (data: UserData): Promise<authResponse> => {
  return axios.post('/auth', data)
}
