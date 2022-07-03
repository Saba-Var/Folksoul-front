import { Header, Wrapper, Info } from 'pages/Home/components/index'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [text, setText] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    try {
      setIsLoading(true)
      const fetch = async () => {
        const res = await axios.get(`http://localhost:5000/band-about`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        })

        if (res.status === 200) {
          if (res.data[0].image) setImage(res.data[0].image)
          setText(res.data[0].about)
        }
        setIsLoading(false)
      }

      fetch()
    } catch (error: any) {
      alert(error.message)
    }
  }, [])

  return (
    <Wrapper>
      <>
        <Header />
        <div className='flex justify-between  px-[3%]'>
          <div className='w-[886px] h-[857px] bg-red-200'></div>
          <Info text={text} image={image} isLoading={isLoading} />
        </div>
      </>
    </Wrapper>
  )
}

export default Home
