import { MemberDetails } from 'helper/types'
import axios from 'axios'

const addOrChangeMember = (data: MemberDetails, url: string) => {
  try {
    const memberDetails = {
      name: data.name,
      instrument: data.instrument,
      orbitLength: data.orbitLength,
      color: data.color,
      biography: data.biography,
    }
    const fetch = async () => {
      let res = await axios({
        method: 'post',
        url: url,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        data: memberDetails,
      })

      if (res.status !== 200) throw new Error('Fetch failed!')
    }
    fetch()
  } catch (error: any) {
    alert(error.message)
  }
}

export default addOrChangeMember
