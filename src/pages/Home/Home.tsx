import { Header, Wrapper, Info, SolarSystem } from 'pages/Home/components'
import { useEffect, useState } from 'react'
import { fetchBandAbout } from 'helper'

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
        <div className='flex justify-between px-[3%]'>
          <SolarSystem />
          <Info bandInfo={bandInfo} image={image} isLoading={isLoading} />
        </div>
      </>
    </Wrapper>
  )
}

export default Home
