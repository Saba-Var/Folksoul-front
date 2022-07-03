import { Header, Wrapper, Info } from 'pages/Home/components/index'
import { fetchBandAbout } from 'helper/index'
import { useEffect, useState } from 'react'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [image, setImage] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    fetchBandAbout(setText, setIsLoading, setImage)
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
