import { ImageProps } from 'pages/About/components/types'
import { PurpleBackground } from 'components'
import { Logo } from 'components/svgs'

const Image: React.FC<ImageProps> = (props) => {
  const { image, isLoading, styles } = props

  return (
    <>
      {!image && !isLoading && (
        <div
          className={`${styles} drop-shadow-5xl border-solidBlue border-[5px] overflow-hidden  rounded-full flex justify-center items-center`}
        >
          <PurpleBackground styles='fixed -z-50 w-full h-full rounded-full' />
          <Logo styles={`${styles}`} />
        </div>
      )}

      {image && (
        <img
          className={`rounded-full animate-slit-in-vertical  w-44 h-44 shadow-5xl border-[5px] border-solidBlue ${styles}`}
          src={`${process.env.REACT_APP_API_BASE_URL}/${image}`}
          alt='band'
        />
      )}
    </>
  )
}

export default Image
