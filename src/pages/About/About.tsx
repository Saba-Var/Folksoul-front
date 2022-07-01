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

  useEffect(() => {
    fetchBandAbout(setBandAbout, setIsLoading)
  }, [])

  const title =
    section === '' ? 'ბენდის შესახებ' : 'ბენდის შესახებ - დაარედაქტირე'

  return (
    <SectionWrapper title={title}>
      <>
        {section === '' && (
          <BandInfo
            isLoading={isLoading}
            about={bandAbout[0].about}
            image={bandAbout[0].image}
          />
        )}

        {section === 'edit' && (
          <EditInfo
            setBandAbout={setBandAbout}
            id={bandAbout[0]._id}
            setSection={setSection}
            about={bandAbout[0].about}
          />
        )}

        {!isLoading && !section && <EditBtn setSection={setSection} />}
      </>
    </SectionWrapper>
  )
}

export default About
