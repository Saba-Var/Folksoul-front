import { FetchSocialLinks } from 'helpers'
import { getLinksData } from 'services'

const fetchSocialLinks: FetchSocialLinks = async (
  setErrorAlert,
  setSocialLinks,
  setIsLoading?
) => {
  try {
    if (setIsLoading) {
      setIsLoading(true)
    }

    const res = await getLinksData()

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
