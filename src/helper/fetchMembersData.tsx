import axios from 'axios'

const fetchMembersData = async (
  setMembersData: (data: any) => void,
  setIsLoading: (loading: boolean) => void,
  page: number
) => {
  setIsLoading(true)
  try {
    const fetch = async () => {
      const res = await axios.get(
        `http://localhost:5000/all-members?page=${page}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
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
