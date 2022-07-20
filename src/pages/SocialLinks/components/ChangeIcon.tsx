import { ChangeIconProps } from 'pages/SocialLinks/components'
import { ImageUpload, CameraBtn } from 'components'
import { useState } from 'react'

const ChangeIcon: React.FC<ChangeIconProps> = (props) => {
  const { image, id, linkName, setLinks } = props

  const [iconModal, setIconModal] = useState(false)

  const [file, setFile] = useState<File | null>()

  let imageSrc = `${process.env.REACT_APP_API_BASE_URL}/${image}`

  if (file) {
    imageSrc = URL.createObjectURL(file)
  }

  return (
    <div className='w-11 relative h-9'>
      {image && (
        <img
          className='w-11 h-8 rounded-lg'
          src={`${process.env.REACT_APP_API_BASE_URL}/${image}`}
          alt='social link icon'
        />
      )}

      <div data-cy='CameraBtn' onClick={() => setIconModal(true)}>
        <CameraBtn
          styles={`top-[7px] left-[25%] w-6 h-6 ${
            image && '!top-[18px] !left-[30px]'
          }`}
        />
      </div>

      {iconModal && (
        <ImageUpload
          title='შეცვალე სოციალური ბმულის ხატულა'
          setImageModal={setIconModal}
          setLinks={setLinks}
          setFile={setFile}
          url={'link'}
          file={file!}
          id={id}
        >
          <div className='flex flex-col h-full justify-between pt-8  pb-[20%] items-center'>
            <p className='font-BPG-Nino-Mtavruli animate-text-focus-in text-lg tracking-wider text-black'>
              {linkName}
            </p>

            {(image || file) && (
              <img
                className={`w-60 h-44 animate-slit-in-vertical ${
                  file && 'border-[3px] rounded-3xl border-green'
                }`}
                src={imageSrc}
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
