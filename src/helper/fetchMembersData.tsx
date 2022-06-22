import axios from 'axios'
import { MemberData } from 'types'

const fetchMembersData = async (
  setMembersData: (data: MemberData) => void,
  setIsLoading: (loading: boolean) => void
) => {
  setIsLoading(true)
  try {
    const fetch = async () => {
      const res = await axios.get('http://localhost:5000/all-members', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
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
