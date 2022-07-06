import { BandImageProps } from 'pages/About/components/types'
import { Image } from 'pages/About/components'
import { CameraBtn } from 'components/svgs'
import { ImageUpload } from 'components'
import { useState } from 'react'

const BandImage: React.FC<BandImageProps> = (props) => {
  const [iconModal, setIconModal] = useState(false)

  return (
    <div>
      <div className={`mx-auto w-44 h-44 relative`}>
        <Image
          isLoading={props.isLoading}
          image={props.image}
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
            title='შეცვალე ბენდის პორტრეტი'
            setLinks={props.setBandAbout}
            setImageModal={setIconModal}
            id={props.id}
          >
            <div className='flex flex-col h-full justify-between pt-44  pb-[20%] items-center'>
              <Image
                isLoading={props.isLoading}
                image={props.image}
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
