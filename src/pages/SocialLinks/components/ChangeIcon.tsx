import { ChangeIconProps } from 'pages/SocialLinks/components/types'
import { CameraBtn } from 'components/svgs'
import { ImageUpload } from 'components'
import { useState } from 'react'

const ChangeIcon: React.FC<ChangeIconProps> = (props) => {
  const [iconModal, setIconModal] = useState(false)

  return (
    <div className='w-11 relative h-9'>
      {props.image && (
        <img
          className='w-11 h-9 rounded-lg'
          src={`http://localhost:5000/${props.image}`}
          alt='social link icon'
        />
      )}

      <div onClick={() => setIconModal(true)}>
        <CameraBtn
          styles={`top-[7px] left-[25%] w-6 h-6 ${
            props.image && '!top-[23px] !left-[30px]'
          }`}
        />
      </div>

      {iconModal && (
        <ImageUpload
          url='http://localhost:5000/upload-link-image'
          setLinks={props.setLinks}
          id={props.id}
          title='შეცვალე სოციალური ბმულის ხატულა'
          setImageModal={setIconModal}
        >
          <div className='flex flex-col h-full justify-between pt-8  pb-[20%] items-center'>
            <p className='font-BPG-Nino-Mtavruli animate-text-focus-in text-lg tracking-wider text-black'>
              {props.linkName}
            </p>
            {props.image && (
              <img
                className='w-60 animate-slit-in-vertical border-[3px] rounded-3xl border-green'
                src={`http://localhost:5000/${props.image}`}
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
