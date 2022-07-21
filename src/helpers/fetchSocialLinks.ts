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

    const { status, data } = await getLinksData()

    if (status === 200) {
      if (setIsLoading) {
        setIsLoading(false)
      }

      return setSocialLinks(data)
    }
  } catch (error: any) {
    setErrorAlert(true)
  }
}
export default fetchSocialLinks
