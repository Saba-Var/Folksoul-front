import { SectionWrapper, ErrorAlert, EditBtn } from 'components'
import { BandInfo, EditInfo } from 'pages/About/components'
import { useEffect, useState } from 'react'
import { fetchBandAbout } from 'helpers'
import { BandData } from 'pages/About'

const About = () => {
  const [bandAbout, setBandAbout] = useState<BandData>([{ about: '', _id: '' }])
  const [section, setSection] = useState('')

  const [errorAlert, setErrorAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { _id, about, image } = bandAbout[0]

  useEffect(() => {
    fetchBandAbout(setErrorAlert, setBandAbout, setIsLoading)
  }, [])

  const title =
    section === '' ? 'ბენდის შესახებ' : 'ბენდის შესახებ - დაარედაქტირე'

  return (
    <SectionWrapper title={title}>
      <div className='animate-fade-in'>
        {errorAlert && (
          <ErrorAlert
            title='ინფორმაცია ვერ მოიძებნა'
            setShowAlert={setErrorAlert}
            styles='top-[5%] left-[53%]'
          />
        )}

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
