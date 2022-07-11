import { Header, Wrapper, Info, SolarSystem } from 'pages/Home/components'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchBandAbout } from 'helper'
import {
  BandMember1,
  BandMember2,
  BandMember3,
  BandMember4,
  BandMember5,
} from 'assets/images'

const Home = () => {
  const [infoImage, setInfoImage] = useState('')

  const [bandInfo, setBandInfo] = useState('')
  const [infoText, setInfoText] = useState('')

  const [image, setImage] = useState('')
  const [color, setColor] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const imageArray = [
    BandMember1,
    BandMember2,
    BandMember3,
    BandMember4,
    BandMember5,
  ]
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/Dashboard/Main')
    else {
      fetchBandAbout(() => {}, setBandInfo, setIsLoading, setImage)
      setInfoText(bandInfo)
      setInfoImage(image)
    }
  }, [bandInfo, image, navigate])

  return (
    <Wrapper>
      <>
        <Header />

        <div className='flex justify-between px-[3%]'>
          <SolarSystem
            setInfoImage={setInfoImage}
            setInfoText={setInfoText}
            imageArray={imageArray}
            setColor={setColor}
            bandInfo={bandInfo}
            image={image}
          />

          <Info
            isLoading={isLoading}
            infoText={infoText}
            image={infoImage}
            color={color}
          />
        </div>
      </>
    </Wrapper>
  )
}

export default Home
