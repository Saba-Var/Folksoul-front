import axios from 'axios'
import { fetchMembersData } from 'helper/index'

const changeMember = (
  data: any,
  setShowModal: (show: boolean) => void,
  setMembersData: any,
  setIsLoading: (loading: boolean) => void,
  page: number,
  setShowErrorAlert: (show: boolean) => void,
  setStatusCode: (status: number) => void
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
    const fetch = async () => {
      const response = await axios.put(
        'http://localhost:5000/change-member',
        data,
        {
          headers: headers,
        }
      )
      if (response.status === 200) {
        setShowModal(true)
        fetchMembersData(setMembersData, setIsLoading, page)
      }
    }
    fetch()
  } catch (error: any) {
    if (error.response.status === 409) {
      setShowErrorAlert(true)
      setStatusCode(409)
    }
  }
}

export default changeMember
