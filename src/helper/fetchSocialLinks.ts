import { AllLinks } from 'pages/SocialLinks/types'
import axios from 'axios'

const fetchSocialLinks = async (
  setSocialLinks: (data: AllLinks) => void,
  setIsLoading?: (loading: boolean) => void
) => {
  try {
    const fetch = async () => {
      if (setIsLoading) setIsLoading(true)
      const res = await axios.get(`http://localhost:5000/all-links`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      if (res.status === 200) {
        if (setIsLoading) setIsLoading(false)
        return setSocialLinks(res.data)
      }
    }
    fetch()
  } catch (error: any) {
    alert(error.message)
  }
}
export default fetchSocialLinks
