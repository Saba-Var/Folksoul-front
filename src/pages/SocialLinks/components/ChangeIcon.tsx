import { ChangeIconProps } from 'pages/SocialLinks/components/types'
import { CameraBtn } from 'components/svgs'
import { ImageUpload } from 'components'
import { useState } from 'react'

const ChangeIcon: React.FC<ChangeIconProps> = (props) => {
  const { image, id, linkName, setLinks } = props

  const [fileExists, setFileExists] = useState(false)
  const [iconModal, setIconModal] = useState(false)

  return (
    <div className='w-11 relative h-9'>
      {image && (
        <img
          className='w-11 h-9 rounded-lg'
          src={`https://folksoul-api.sabavar.redberryinternship.ge/${image}`}
          alt='social link icon'
        />
      )}

      <div data-cy='CameraBtn' onClick={() => setIconModal(true)}>
        <CameraBtn
          styles={`top-[7px] left-[25%] w-6 h-6 ${
            image && '!top-[23px] !left-[30px]'
          }`}
        />
      </div>

      {iconModal && (
        <ImageUpload
          url='https://folksoul-api.sabavar.redberryinternship.ge/upload-link-image'
          title='შეცვალე სოციალური ბმულის ხატულა'
          setFileExists={setFileExists}
          setImageModal={setIconModal}
          setLinks={setLinks}
          id={id}
        >
          <div className='flex flex-col h-full justify-between pt-8  pb-[20%] items-center'>
            <p className='font-BPG-Nino-Mtavruli animate-text-focus-in text-lg tracking-wider text-black'>
              {linkName}
            </p>

            {image && (
              <img
                className={`w-60 h-44 animate-slit-in-vertical ${
                  fileExists && 'border-[3px] rounded-3xl border-green'
                }`}
                src={`https://folksoul-api.sabavar.redberryinternship.ge/${image}`}
                alt='social link icon'
              />
            )}
          </div>
        </ImageUpload>
      )}
    </div>
  )
}

export default ChangeIcon
