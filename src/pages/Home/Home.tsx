import { Header, Wrapper, Info, SolarSystem } from 'pages/Home/components'
import { useEffect, useState } from 'react'
import { fetchBandAbout } from 'helper'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [bandInfo, setBandInfo] = useState('')
  const [image, setImage] = useState('')

  const [infoText, setInfoText] = useState('')

  useEffect(() => {
    fetchBandAbout(setBandInfo, setIsLoading, setImage)
    setInfoText(bandInfo)
  }, [bandInfo])

  return (
    <Wrapper>
      <>
        <Header />
        <div className='flex justify-between px-[3%]'>
          <SolarSystem setInfoText={setInfoText} />
          <Info infoText={infoText} image={image} isLoading={isLoading} />
        </div>
      </>
    </Wrapper>
  )
}

export default Home
