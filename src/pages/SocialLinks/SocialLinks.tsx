import { SectionWrapper, DirectBtn } from 'components'
import { AllLinks } from 'pages/SocialLinks/types'
import { fetchSocialLinks } from 'helper/index'
import { useEffect, useState } from 'react'
import {
  Links,
  AddLinkForm,
  ChangeLinkForm,
} from 'pages/SocialLinks/components'

const SocialLinks = () => {
  const [loading, setIsLoading] = useState(false)
  const [links, setLinks] = useState<AllLinks>([])
  const [section, setSection] = useState('')
  const [linkId, setLinkId] = useState('id')

  useEffect(() => {
    fetchSocialLinks(setLinks, setIsLoading)
  }, [])

  let title = ''
  if (section === '') title = 'სოციალური ბმულები'
  else if (section === 'addLink') title = 'დაამატე სოციალური ბმული'
  else title = 'შეცვალე სოციალური ბმული'

  return (
    <SectionWrapper title={title}>
      <div className={`flex flex-col justify-between h-full `}>
        {links.length > 0 && section === '' && (
          <Links
            setLinkId={setLinkId}
            setSection={setSection}
            links={links}
            setLinks={setLinks}
          />
        )}

        {links.length === 0 && section === '' && !loading && (
          <h2 className='text-center animate-tracking-in-expand pt-[20%] text-black tracking-widest text-4xl'>
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
            id={linkId}
            links={links}
            setLinks={setLinks}
            setSection={setSection}
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
