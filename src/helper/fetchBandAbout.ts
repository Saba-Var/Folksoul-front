import axios from 'axios'
import {
  SetBandAbout,
  SetIsLoading,
  BandAboutText,
  BandImage,
} from 'helper/types'

const fetchBandAbout = (
  setBandAbout: SetBandAbout | BandAboutText,
  setIsLoading?: SetIsLoading,
  setImage?: BandImage
) => {
  try {
    if (setIsLoading) setIsLoading(true)
    const fetch = async () => {
      const res = await axios.get(`http://localhost:5000/band-about`)

      if (res.status === 200) {
        if (setImage) {
          if (res.data[0].image) setImage(res.data[0].image)
          setBandAbout(res.data[0].about)
        } else setBandAbout(res.data)
      }

      if (setIsLoading) setIsLoading(false)
    }

    fetch()
  } catch (error: any) {
    console.log(error.message)
  }
}

export default fetchBandAbout
