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
    const param = page ? `?page=${page}` : ''

    const { status, data } = await getMembersData(param)

    if (status === 200) {
      setIsLoading(false)

      setMembersData(data)
    }
  } catch (error: any) {
    setErrorAlert(true)
  }
}
export default fetchMembersData
