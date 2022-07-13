import { SetSocialLinks, SetIsLoading, SetErrorAlert } from 'helpers/types'
import axios from 'axios'

const fetchSocialLinks = async (
  setErrorAlert: SetErrorAlert,
  setSocialLinks: SetSocialLinks,
  setIsLoading?: SetIsLoading
) => {
  try {
    if (setIsLoading) {
      setIsLoading(true)
    }

    const res = await axios.get(
      process.env.REACT_APP_API_BASE_URL! + '/all-links',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )

    if (res.status === 200) {
      if (setIsLoading) {
        setIsLoading(false)
      }

      return setSocialLinks(res.data)
    }
  } catch (error: any) {
    setErrorAlert(true)
  }
}
export default fetchSocialLinks
