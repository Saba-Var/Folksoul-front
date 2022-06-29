import { AllLinks } from 'pages/SocialLinks/types'
import axios from 'axios'

const fetchSocialLinks = async (setSocialLinks: (data: AllLinks) => void) => {
  try {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:5000/all-links`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      if (res.status === 200) {
        return setSocialLinks(res.data)
      }
    }
    fetch()
  } catch (error: any) {
    alert(error.message)
  }
}
export default fetchSocialLinks
