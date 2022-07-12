import axios from 'axios'

import {
  BandAboutText,
  SetErrorAlert,
  SetBandAbout,
  SetIsLoading,
  BandImage,
} from 'helpers/types'

const fetchBandAbout = async (
  setErrorAlert: SetErrorAlert,
  setBandAbout: SetBandAbout | BandAboutText,
  setIsLoading?: SetIsLoading,
  setImage?: BandImage
) => {
  try {
    if (setIsLoading) {
      setIsLoading(true)
    }

    const res = await axios.get(process.env.REACT_APP_GET_BAND_ABOUT!)

    if (res.status === 200) {
      if (setImage) {
        if (res.data[0].image) {
          setImage(res.data[0].image)
        }

        setBandAbout(res.data[0].about)
      } else {
        setBandAbout(res.data)
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
