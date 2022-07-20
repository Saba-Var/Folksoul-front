import { FetchMembersData } from 'helpers'
import { getMembersData } from 'services'

const fetchMembersData: FetchMembersData = async (
  setErrorAlert,
  setMembersData,
  setIsLoading,
  page?
) => {
  setIsLoading(true)
  try {
    const url = page ? `/all-members?page=${page}` : '/all-members'

    const { status, data } = await getMembersData(url)

    if (status === 200) {
      setIsLoading(false)

      setMembersData(data)
    }
  } catch (error: unknown) {
    setErrorAlert(true)
  }
}
export default fetchMembersData
