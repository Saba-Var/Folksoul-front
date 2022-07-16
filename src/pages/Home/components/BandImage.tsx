import { BandImageProps } from 'pages/Home/components'
import { PurpleBackground, Logo } from 'components'

const BandImage: React.FC<BandImageProps> = (props) => {
  const { color, image } = props

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`absolute w-72 h-72 top-[-34%] left-[19%] 3.5xl:top-[-30%] 3.5xl:left-[24%] 4xl:top-[-27%] 4xl:left-[26%]  6xl:top-[-24%] 6xl:left-[28%] drop-shadow-4xl border-white border-2 overflow-hidden rounded-full flex justify-center items-center`}
    >
      {!image && (
        <div data-cy='LogoImage' className='h-full'>
          <PurpleBackground styles='fixed -z-50 w-[%]  h-full rounded-full' />

          <Logo styles='w-full h-full' />
        </div>
      )}

      {image && (
        <img
          className='h-full w-full'
          src={`${process.env.REACT_APP_API_BASE_URL}/${image}`}
          data-cy='MemberImage'
          alt='band'
        />
      )}
    </div>
  )
}

export default BandImage
