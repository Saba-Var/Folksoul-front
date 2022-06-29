import { Links } from 'pages/SocialLinks/components'
import { AllLinks } from 'pages/SocialLinks/types'
import { fetchSocialLinks } from 'helper/index'
import { SectionWrapper } from 'components'
import { useEffect, useState } from 'react'

function SocialLinks() {
  const [links, setLinks] = useState<AllLinks>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchSocialLinks(setLinks, setIsLoading)
  }, [])

  return (
    <SectionWrapper title='სოციალური ბმულები'>
      <>
        {links.length > 0 && <Links links={links} setLinks={setLinks} />}
        {links.length === 0 && !isLoading && (
          <h2 className='text-center pt-[20%] text-black tracking-widest text-4xl'>
            სოციალური ბმულები არ არის დამატებული!
          </h2>
        )}
      </>
    </SectionWrapper>
  )
}

export default SocialLinks
