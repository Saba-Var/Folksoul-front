import { BandAbout } from 'helper/types'
import axios from 'axios'

const fetchBandAbout = (
  setBandAbout: (data: BandAbout) => void,
  setIsLoading?: (loading: boolean) => void
) => {
  try {
    if (setIsLoading) setIsLoading(true)
    const fetch = async () => {
      const res = await axios.get(`http://localhost:5000/band-about`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      if (res.status === 200) {
        setBandAbout(res.data)
      }
      if (setIsLoading) setIsLoading(false)
    }

    fetch()
  } catch (error: any) {
    alert(error.message)
  }
}

export default fetchBandAbout
