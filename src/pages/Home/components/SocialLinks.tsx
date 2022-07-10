import { AllLinks } from 'pages/SocialLinks/types'
import { fetchSocialLinks } from 'helper/index'
import { useEffect, useState } from 'react'

const SocialLinks = () => {
  const [links, setLinks] = useState<AllLinks>([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchSocialLinks(() => {}, setLinks, setIsLoading)
  }, [])

  return (
    <div className='flex justify-center mt-6'>
      <div className='flex gap-16'>
        {!isLoading && (
          <>
            {links
              .filter((link) => link.image)
              .map((link) => (
                <a
                  data-cy={link.linkName}
                  key={link.linkName}
                  target='_blank'
                  rel='noreferrer'
                  href={
                    link.url.includes('https://')
                      ? link.url
                      : `https://${link.url}`
                  }
                >
                  <img
                    src={`https://folksoul-api.sabavar.redberryinternship.ge/${link.image}`}
                    className='h-9'
                    alt='band'
                  />
                </a>
              ))}
          </>
        )}
      </div>
    </div>
  )
}

export default SocialLinks
