import { getBandInfoData } from 'services'
import { FetchBandAbout } from 'helpers'

const fetchBandAbout: FetchBandAbout = async (
  setErrorAlert,
  setBandAbout,
  setIsLoading?,
  setImage?
) => {
  try {
    if (setIsLoading) {
      setIsLoading(true)
    }

    const { status, data } = await getBandInfoData()

    if (status === 200) {
      if (setImage && data[0].image) {
        setImage(data[0].image)
      }

      setBandAbout(data)
    }

    if (setIsLoading) {
      setIsLoading(false)
    }
  } catch (error: any) {
    setErrorAlert(true)
  }
}

export default fetchBandAbout
