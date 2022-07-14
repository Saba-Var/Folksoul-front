import { SetMembersData, SetIsLoading, SetErrorAlert } from 'helpers'
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
      ? `${process.env.REACT_APP_API_BASE_URL}/all-members?page=${page}`
      : process.env.REACT_APP_API_BASE_URL + '/all-members'

    const res = await axios.get(url!)

    if (res.status === 200) {
      setIsLoading(false)

      return setMembersData(res.data)
    }
  } catch (error: any) {
    setErrorAlert(true)
  }
}
export default fetchMembersData
