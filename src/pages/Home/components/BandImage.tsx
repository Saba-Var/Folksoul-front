import { BandImageProps } from 'pages/Home/components/types'
import { PurpleBackground } from 'components'
import { Logo } from 'components/svgs'

const BandImage: React.FC<BandImageProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
      }}
      className={`absolute w-72 h-72 top-[-23%] left-[28%] drop-shadow-4xl border-white border-2 overflow-hidden rounded-full flex justify-center items-center`}
    >
      {!props.image && (
        <div data-cy='LogoImage' className='h-full'>
          <PurpleBackground styles='fixed -z-50 w-[%]  h-full rounded-full' />

          <Logo styles='w-full h-full' />
        </div>
      )}

      {props.image && (
        <img
          data-cy='MemberImage'
          src={`${props.image}`}
          className='h-full w-full'
          alt='band'
        />
      )}
    </div>
  )
}

export default BandImage
