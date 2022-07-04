import { SetMembersData, SetIsLoading } from 'helper/types'
import axios from 'axios'

const fetchMembersData = async (
  setMembersData: SetMembersData | any,
  setIsLoading: SetIsLoading,
  page?: number
) => {
  setIsLoading(true)
  try {
    const url = page
      ? `http://localhost:5000/all-members?page=${page}`
      : `http://localhost:5000/all-members`

    const fetch = async () => {
      const res = await axios.get(url)

      if (res.status === 200) {
        setIsLoading(false)
        return setMembersData(res.data)
      }
    }
    fetch()
  } catch (error: any) {
    alert(error.message)
  }
}
export default fetchMembersData
