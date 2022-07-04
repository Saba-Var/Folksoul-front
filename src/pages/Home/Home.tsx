import { Header, Wrapper, Info } from 'pages/Home/components/index'
import { fetchBandAbout } from 'helper/index'
import { useEffect, useState } from 'react'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [bandInfo, setBandInfo] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    fetchBandAbout(setBandInfo, setIsLoading, setImage)
  }, [])

  return (
    <Wrapper>
      <>
        <Header />
        <div className='flex justify-between  px-[3%]'>
          <div className='w-[886px] h-[857px] bg-red-200'></div>
          <Info bandInfo={bandInfo} image={image} isLoading={isLoading} />
        </div>
      </>
    </Wrapper>
  )
}

export default Home
