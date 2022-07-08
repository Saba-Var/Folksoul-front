import { AllLinks } from 'pages/SocialLinks/types'
import { fetchSocialLinks } from 'helper/index'
import { useEffect, useState } from 'react'
import { ErrorAlert } from 'components'

const SocialLinks = () => {
  const [links, setLinks] = useState<AllLinks>([])

  const [errorAlert, setErrorAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchSocialLinks(setErrorAlert, setLinks, setIsLoading)
  }, [])

  return (
    <div className='flex justify-center mt-6'>
      {errorAlert && (
        <ErrorAlert
          styles='top-[5%] left-[53%]'
          setShowAlert={setErrorAlert}
          title='ინფორმაცია ვერ მოიძებნა'
        />
      )}

      <div className='flex gap-16'>
        {!isLoading && (
          <>
            {links
              .filter((link) => link.image)
              .map((link) => (
                <a
                  data-TestId={link.linkName}
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
                    src={`http://localhost:5000/${link.image}`}
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
