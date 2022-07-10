import { SetSocialLinks, SetIsLoading, SetErrorAlert } from 'helper/types'
import axios from 'axios'

const fetchSocialLinks = async (
  setErrorAlert: SetErrorAlert,
  setSocialLinks: SetSocialLinks,
  setIsLoading?: SetIsLoading
) => {
  try {
    if (setIsLoading) setIsLoading(true)
    const res = await axios.get(
      `https://folksoul-api.sabavar.redberryinternship.ge/all-links`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    if (res.status === 200) {
      if (setIsLoading) setIsLoading(false)
      return setSocialLinks(res.data)
    }
  } catch (error: any) {
    setErrorAlert(true)
  }
}
export default fetchSocialLinks
