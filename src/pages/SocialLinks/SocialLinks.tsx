import { SectionWrapper, DirectBtn } from 'components'
import { Links, AddLinkForm } from 'pages/SocialLinks/components'
import { AllLinks } from 'pages/SocialLinks/types'
import { fetchSocialLinks } from 'helper/index'
import { useEffect, useState } from 'react'

function SocialLinks() {
  const [links, setLinks] = useState<AllLinks>([])
  const [, setIsLoading] = useState(false)
  const [section, setSection] = useState('')

  console.log(links)

  useEffect(() => {
    fetchSocialLinks(setLinks, setIsLoading)
  }, [])

  let title = ''
  if (section === '') title = 'სოციალური ბმულები'
  else if (section === 'addLink') title = 'დაამატე სოციალური ბმული'
  else title = 'შეცვალე სოციალური ბმული'

  return (
    <SectionWrapper title={title}>
      <div className='flex flex-col justify-between h-full'>
        {links.length > 0 && section === '' && (
          <Links links={links} setLinks={setLinks} />
        )}

        {links.length === 0 && section === '' && (
          <h2 className='text-center animate-tracking-in-expand pt-[20%] text-black tracking-widest text-4xl'>
            სოციალური ბმულები არ არის დამატებული!
          </h2>
        )}

        {section === '' && (
          <DirectBtn
            title='დაამატე ახალი სოციალური ბმული'
            direction={setSection}
            goTo={'addLink'}
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
