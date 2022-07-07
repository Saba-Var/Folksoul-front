import axios from 'axios'
import { changeMemberParams } from 'helper/types'
import { fetchMembersData } from 'helper/index'

function changeMember({
  data,
  setShowModal,
  setMembersData,
  setIsLoading,
  page,
  setShowErrorAlert,
  setStatusCode,
}: changeMemberParams) {
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
