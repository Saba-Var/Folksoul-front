import { SetErrorAlert, SetIsLoading, BandImage, setBandAbout } from 'helpers'
import { getBandInfoData } from 'services'

const fetchBandAbout = async (
  setErrorAlert: SetErrorAlert,
  setBandAbout: setBandAbout,
  setIsLoading?: SetIsLoading,
  setImage?: BandImage
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
  } catch (error: unknown) {
    setErrorAlert(true)
  }
}

export default fetchBandAbout
