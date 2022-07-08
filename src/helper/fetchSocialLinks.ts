import { SetSocialLinks, SetIsLoading } from 'helper/types'
import axios from 'axios'

const fetchSocialLinks = async (
  setSocialLinks: SetSocialLinks,
  setIsLoading?: SetIsLoading
) => {
  try {
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
  } catch (error: any) {}
}
export default fetchSocialLinks
