import { InfoProps } from 'pages/Home/components/types'
import { PurpleBackground } from 'components'
import { Logo } from 'components/svgs'

const Info: React.FC<InfoProps> = (props) => {
  return (
    <div className='flex flex-col pt-[5%]'>
      <div className='bg-yellow pl-16 pt-40 pr-16 pb-9 rounded-xl w-[100%] h-[63vh] relative flex justify-center'>
        <p className='w-[31vw] text-justify  h-[100%] overflow-y-auto pr-[7%] overflow-hidden animate-focus-in-expand whitespace-pre-line break-words pt-8 bg-transparent resize-none outline-none'>
          {props.text}
        </p>

        <div className='absolute w-72 h-72 top-[-23%] left-[28%] drop-shadow-4xl border-white border-2 overflow-hidden rounded-full flex justify-center items-center'>
          {!props.image && (
            <>
              <PurpleBackground styles='fixed -z-50 w-[%]  h-full rounded-full' />
              <Logo styles='w-full h-full' />
            </>
          )}

          {props.image && (
            <img
              src={`http://localhost:5000/${props.image}`}
              className='h-full w-full'
              alt='band'
            />
          )}
        </div>

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
