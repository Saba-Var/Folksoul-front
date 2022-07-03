import { BandInfo, EditInfo } from 'pages/About/components'
import { BandData } from 'pages/About/types'
import { SectionWrapper } from 'components'
import { useEffect, useState } from 'react'
import { EditBtn } from 'components/svgs'
import { fetchBandAbout } from 'helper'

const About = () => {
  const [bandAbout, setBandAbout] = useState<BandData>([{ about: '', _id: '' }])
  const [isLoading, setIsLoading] = useState(false)
  const [section, setSection] = useState('')

  const { _id, about, image } = bandAbout[0]

  useEffect(() => {
    fetchBandAbout(setBandAbout, setIsLoading)
  }, [])

  const title =
    section === '' ? 'ბენდის შესახებ' : 'ბენდის შესახებ - დაარედაქტირე'

  return (
    <SectionWrapper title={title}>
      <div className='animate-fade-in'>
        {section === '' && (
          <BandInfo
            setBandAbout={setBandAbout}
            isLoading={isLoading}
            about={about}
            image={image}
            id={_id}
          />
        )}

        {section === 'edit' && (
          <EditInfo
            setBandAbout={setBandAbout}
            setSection={setSection}
            about={about}
            id={_id}
          />
        )}

        {!isLoading && !section && <EditBtn setSection={setSection} />}
      </div>
    </SectionWrapper>
  )
}

export default About
