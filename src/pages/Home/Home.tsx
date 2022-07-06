import { Header, Wrapper, Info, SolarSystem } from 'pages/Home/components'
import { useEffect, useState } from 'react'
import { fetchBandAbout } from 'helper'
import {
  bandMember1,
  bandMember2,
  bandMember3,
  bandMember4,
  bandMember5,
} from 'assets/images'

const Home = () => {
  const [infoImage, setInfoImage] = useState('')

  const [bandInfo, setBandInfo] = useState('')
  const [infoText, setInfoText] = useState('')

  const [image, setImage] = useState('')
  const [color, setColor] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const imageArray = [
    bandMember1,
    bandMember2,
    bandMember3,
    bandMember4,
    bandMember5,
  ]

  useEffect(() => {
    fetchBandAbout(setBandInfo, setIsLoading, setImage)
    setInfoText(bandInfo)
    setInfoImage(image)
  }, [bandInfo, image])

  return (
    <Wrapper>
      <>
        <Header />

        <div className='flex justify-between px-[3%]'>
          <SolarSystem
            image={image}
            setColor={setColor}
            setInfoText={setInfoText}
            imageArray={imageArray}
            setInfoImage={setInfoImage}
            bandInfo={bandInfo}
          />

          <Info
            color={color}
            infoText={infoText}
            image={infoImage}
            isLoading={isLoading}
          />
        </div>
      </>
    </Wrapper>
  )
}

export default Home
