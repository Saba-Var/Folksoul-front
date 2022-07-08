import axios from 'axios'
import {
  SetBandAbout,
  SetIsLoading,
  BandAboutText,
  BandImage,
  SetErrorAlert,
} from 'helper/types'

const fetchBandAbout = async (
  setErrorAlert: SetErrorAlert,
  setBandAbout: SetBandAbout | BandAboutText,
  setIsLoading?: SetIsLoading,
  setImage?: BandImage
) => {
  try {
    if (setIsLoading) setIsLoading(true)

    const res = await axios.get(`http://localhost:5000/band-about`)

    if (res.status === 200) {
      if (setImage) {
        if (res.data[0].image) setImage(res.data[0].image)
        setBandAbout(res.data[0].about)
      } else setBandAbout(res.data)
    }

    if (setIsLoading) setIsLoading(false)
  } catch (error: any) {
    setErrorAlert(true)
  }
}

export default fetchBandAbout
