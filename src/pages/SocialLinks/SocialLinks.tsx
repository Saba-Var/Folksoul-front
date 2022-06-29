import { Links } from 'pages/SocialLinks/components'
import { AllLinks } from 'pages/SocialLinks/types'
import { fetchSocialLinks } from 'helper/index'
import { SectionWrapper } from 'components'
import { useEffect, useState } from 'react'

function SocialLinks() {
  const [links, setLinks] = useState<AllLinks>([])

  useEffect(() => {
    fetchSocialLinks(setLinks)
  }, [])

  return (
    <SectionWrapper title='სოციალური ბმულები'>
      <Links links={links} setLinks={setLinks} />
    </SectionWrapper>
  )
}

export default SocialLinks
