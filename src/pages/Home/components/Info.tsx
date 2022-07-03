import { InfoProps } from 'pages/Home/components/types'
import { BandImage } from 'pages/Home/components'
import { PurpleBackground } from 'components'

const Info: React.FC<InfoProps> = (props) => {
  return (
    <div className='flex flex-col pt-[5%]'>
      <div className='bg-yellow pl-16 pt-40 pr-16 pb-9 rounded-xl w-[100%] h-[63vh] relative flex justify-center'>
        <p className='w-[31vw] text-justify  h-[100%] overflow-y-auto pr-[7%] overflow-hidden animate-focus-in-expand whitespace-pre-line break-words pt-8 bg-transparent resize-none outline-none'>
          {props.text}
        </p>

        {!props.isLoading && <BandImage image={props.image} />}

        <PurpleBackground styles='absolute w-4 h-4 rounded-full top-6 left-6' />
        <PurpleBackground styles='absolute w-4 h-4 rounded-full top-6 right-6' />
      </div>

      <div className='flex'>
        <p>social link1</p>
        <p>social link2</p>
        <p>social link3</p>
      </div>
    </div>
  )
}

export default Info
