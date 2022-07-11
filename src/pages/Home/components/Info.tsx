import { BandImage, SocialLinks } from 'pages/Home/components'
import { InfoProps } from 'pages/Home/components/types'
import { PurpleBackground } from 'components'

const Info: React.FC<InfoProps> = (props) => {
  const { infoText, isLoading, color, image } = props

  return (
    <div className='flex flex-col pt-[8%] animate-fade-in'>
      <div className='bg-yellow pl-16 pt-48 pr-16 pb-9 rounded-xl w-[100%] h-[63vh] relative flex justify-center'>
        <p className='w-[31vw] text-justify  h-[100%] whiteScroll overflow-y-auto pr-[7%] overflow-hidden animate-focus-in-expand whitespace-pre-line break-words bg-transparent resize-none outline-none'>
          {infoText}
        </p>

        {!isLoading && <BandImage color={color} image={image} />}

        <PurpleBackground styles='absolute w-4 h-4 rounded-full top-6 left-6' />
        <PurpleBackground styles='absolute w-4 h-4 rounded-full top-6 right-6' />
      </div>

      <SocialLinks />
    </div>
  )
}

export default Info
