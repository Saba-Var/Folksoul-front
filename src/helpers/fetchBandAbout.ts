import { SetErrorAlert, SetIsLoading, BandImage } from 'helpers'
import { getBandInfoData } from 'services'

const fetchBandAbout = async (
  setErrorAlert: SetErrorAlert,
  setBandAbout: any,
  setIsLoading?: SetIsLoading,
  setImage?: BandImage
) => {
  try {
    if (setIsLoading) {
      setIsLoading(true)
    }

    const { status, data } = await getBandInfoData()

    if (status === 200) {
      if (setImage) {
        if (data[0].image) {
          setImage(data[0].image)
        }

        setBandAbout(data[0].about)
      } else {
        setBandAbout(data)
      }
    }

    if (setIsLoading) {
      setIsLoading(false)
    }
  } catch (error: any) {
    setErrorAlert(true)
  }
}

export default fetchBandAbout
