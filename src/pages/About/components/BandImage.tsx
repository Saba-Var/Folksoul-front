import { BandImageProps } from 'pages/About/components/types'
import { CameraBtn, Logo } from 'components/svgs'
import { PurpleBackground } from 'components'

const BandImage: React.FC<BandImageProps> = (props) => {
  return (
    <>
      <div className='mx-auto w-44 h-44 relative'>
        {!props.image && !props.isLoading && (
          <div className='w-44 h-44 drop-shadow-5xl border-solidBlue border-[5px] overflow-hidden  rounded-full flex justify-center items-center'>
            <PurpleBackground styles='fixed -z-50 w-full h-full rounded-full' />
            <Logo styles='w-44 h-44' />
          </div>
        )}

        {props.image && (
          <img
            alt='band '
            src={`http://localhost:5000/${props.image}`}
            className='rounded-full w-full h-full shadow-5xl border-[5px] border-solidBlue'
          />
        )}

        {!props.isLoading && (
          <CameraBtn styles='top-[67%] drop-shadow-3xl right-[0px] w-14 h-14' />
        )}
      </div>
    </>
  )
}

export default BandImage
