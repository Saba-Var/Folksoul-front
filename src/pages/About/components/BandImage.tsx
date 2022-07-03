import { BandImageProps } from 'pages/About/components/types'
import { Image } from 'pages/About/components'
import { CameraBtn } from 'components/svgs'
import { ImageUpload } from 'components'
import { useState } from 'react'

const BandImage: React.FC<BandImageProps> = (props) => {
  const [iconModal, setIconModal] = useState(false)

  return (
    <div className=''>
      <div className='mx-auto w-44 h-44 relative'>
        <Image
          image={props.image}
          isLoading={props.isLoading}
          styles='w-44 h-44'
        />

        {!props.isLoading && (
          <div onClick={() => setIconModal(true)}>
            <CameraBtn styles='top-[67%] drop-shadow-3xl right-[0px] w-14 h-14' />
          </div>
        )}

        {iconModal && (
          <ImageUpload
            url='http://localhost:5000/upload-band-image'
            setLinks={props.setBandAbout}
            id={props.id}
            title='შეცვალე ბენდის პორტრეტი'
            setImageModal={setIconModal}
          >
            <div className='flex flex-col h-full justify-between pt-8  pb-[20%] items-center'>
              <Image
                image={props.image}
                isLoading={props.isLoading}
                styles='w-60 h-60'
              />
            </div>
          </ImageUpload>
        )}
      </div>
    </div>
  )
}

export default BandImage
