import { BandInfo } from 'pages/About/components'
import { BandData } from 'pages/About/types'
import { SectionWrapper } from 'components'
import { useEffect, useState } from 'react'
import { fetchBandAbout } from 'helper'

const About = () => {
  const [bandAbout, setBandAbout] = useState<BandData>([{ about: '', _id: '' }])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchBandAbout(setBandAbout, setIsLoading)
  }, [])

  return (
    <SectionWrapper title='ბენდის შესახებ'>
      <BandInfo
        isLoading={isLoading}
        about={bandAbout[0].about}
        image={bandAbout[0].image}
      />
    </SectionWrapper>
  )
}

export default About
