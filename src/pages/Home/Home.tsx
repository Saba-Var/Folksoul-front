import { Header, Wrapper, Info, SolarSystem } from 'pages/Home/components'
import { useEffect, useState, useCallback } from 'react'
import { fetchBandAbout } from 'helpers'
import { BandData } from 'pages/About'
import {
  BandMember1,
  BandMember2,
  BandMember3,
  BandMember4,
  BandMember5,
} from 'assets'

const Home = () => {
  const [infoImage, setInfoImage] = useState('')

  const [bandInfo, setBandInfo] = useState<BandData>([{ about: '', _id: '' }])
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

  const fetchData = useCallback(async () => {
    fetchBandAbout(() => {}, setBandInfo, setIsLoading, setImage)

    setInfoText(bandInfo[0].about)

    if (image.includes('images/band')) {
      setInfoImage(`${process.env.REACT_APP_API_BASE_URL}/${image}`)
    }
  }, [bandInfo, image])

  useEffect(() => {
    if (!infoText) {
      fetchData()
    }
  }, [fetchData, infoText])

  return (
    <Wrapper>
      <>
        <Header />

        <div className='flex justify-between px-[3%]'>
          <SolarSystem
            bandInfo={bandInfo[0].about}
            setInfoImage={setInfoImage}
            setInfoText={setInfoText}
            imageArray={imageArray}
            setColor={setColor}
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
