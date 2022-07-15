import axios from 'services'

export const authenticateUser = (data: {
  username: string
  password: string
}): Promise<{
  status: number
  data: { token: string }
}> => {
  return axios.post('/auth', data)
}
