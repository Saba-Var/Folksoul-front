import { SectionWrapper, DirectBtn, ErrorAlert } from 'components'
import { AllLinks } from 'pages/SocialLinks'
import { useEffect, useState } from 'react'
import { fetchSocialLinks } from 'helpers'
import {
  ChangeLinkForm,
  AddLinkForm,
  Links,
} from 'pages/SocialLinks/components'

const SocialLinks = () => {
  const [links, setLinks] = useState<AllLinks>([])

  const [errorAlert, setErrorAlert] = useState(false)
  const [loading, setIsLoading] = useState(false)

  const [section, setSection] = useState('')
  const [linkId, setLinkId] = useState('id')

  useEffect(() => {
    fetchSocialLinks(setErrorAlert, setLinks, setIsLoading)
  }, [])

  let title = ''

  if (section === '') {
    title = 'სოციალური ბმულები'
  } else if (section === 'addLink') {
    title = 'დაამატე სოციალური ბმული'
  } else {
    title = 'შეცვალე სოციალური ბმული'
  }

  return (
    <SectionWrapper title={title}>
      <div className={`flex flex-col justify-between h-full `}>
        {errorAlert && (
          <ErrorAlert
            title='ინფორმაცია ვერ მოიძებნა'
            styles='top-[5%] left-[53%]'
            setShowAlert={setErrorAlert}
          />
        )}

        {links.length > 0 && section === '' && (
          <Links
            setSection={setSection}
            setLinkId={setLinkId}
            setLinks={setLinks}
            links={links}
          />
        )}

        {links.length === 0 && section === '' && !loading && (
          <h2
            data-cy='NoLink'
            className='text-center animate-tracking-in-expand pt-[20%] text-black tracking-widest text-4xl'
          >
            სოციალური ბმულები არ არის დამატებული!
          </h2>
        )}

        {section === '' && !loading && (
          <DirectBtn
            title='დაამატე ახალი სოციალური ბმული'
            direction={setSection}
            goTo={'addLink'}
          />
        )}

        {section === 'changeLink' && (
          <ChangeLinkForm
            setSection={setSection}
            setLinks={setLinks}
            links={links}
            id={linkId}
          />
        )}

        {section === 'addLink' && (
          <AddLinkForm setLinks={setLinks} setSection={setSection} />
        )}
      </div>
    </SectionWrapper>
  )
}

export default SocialLinks
