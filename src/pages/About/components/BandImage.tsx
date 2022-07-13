import { BandImageProps } from 'pages/About/components/types'
import { Image } from 'pages/About/components'
import { CameraBtn } from 'components/svgs'
import { ImageUpload } from 'components'
import { useState } from 'react'

const BandImage: React.FC<BandImageProps> = (props) => {
  const { isLoading, image, setBandAbout, id } = props

  const [iconModal, setIconModal] = useState(false)

  return (
    <div>
      <div className={`mx-auto w-44 h-44 relative`}>
        <Image isLoading={isLoading} image={image} styles='!w-44 !h-44' />

        {!isLoading && (
          <div data-cy='CameraBtn' onClick={() => setIconModal(true)}>
            <CameraBtn styles='top-[67%] drop-shadow-3xl right-[0px] w-14 h-14' />
          </div>
        )}

        {iconModal && (
          <ImageUpload
            url={process.env.REACT_APP_API_BASE_URL! + '/upload-band-image'}
            title='შეცვალე ბენდის პორტრეტი'
            setImageModal={setIconModal}
            setLinks={setBandAbout}
            id={id}
          >
            <div className='flex flex-col h-full justify-between  pb-[20%] items-center'>
              <Image isLoading={isLoading} image={image} styles='!w-60 !h-60' />
            </div>
          </ImageUpload>
        )}
      </div>
    </div>
  )
}

export default BandImage
