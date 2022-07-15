import { SetIsLoading, SetErrorAlert } from 'helpers'
import { getMembersData } from 'services'

const fetchMembersData = async (
  setErrorAlert: SetErrorAlert,
  setMembersData: any,
  setIsLoading: SetIsLoading,
  page?: number
) => {
  setIsLoading(true)
  try {
    const url = page ? `/all-members?page=${page}` : '/all-members'

    const { status, data } = await getMembersData(url)

    if (status === 200) {
      setIsLoading(false)

      return setMembersData(data)
    }
  } catch (error: any) {
    setErrorAlert(true)
  }
}
export default fetchMembersData
