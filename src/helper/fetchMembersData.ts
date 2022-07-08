import { SetMembersData, SetIsLoading, SetErrorAlert } from 'helper/types'
import axios from 'axios'

const fetchMembersData = async (
  setErrorAlert: SetErrorAlert,
  setMembersData: SetMembersData | any,
  setIsLoading: SetIsLoading,
  page?: number
) => {
  setIsLoading(true)
  try {
    const url = page
      ? `http://localhost:5000/all-members?page=${page}`
      : `http://localhost:5000/all-members`

    const res = await axios.get(url)

    if (res.status === 200) {
      setIsLoading(false)
      return setMembersData(res.data)
    }
  } catch (error: any) {
    setErrorAlert(true)
  }
}
export default fetchMembersData
