import { Logo } from 'components/svgs'
import { PurpleBackground } from 'components'

function Info() {
  return (
    <div className='h-[768px] flex items-end'>
      <div className='bg-yellow pt-48 rounded-xl w-[682px] h-[611px] relative flex justify-center'>
        <p className='w-[535px]  h-[377px] overflow-y-scroll'>info here</p>
        <div className='absolute w-[313px] top-[-25%] left-[28%] drop-shadow-4xl border-white border-2 overflow-hidden h-[313px] rounded-full flex justify-center items-center'>
          <PurpleBackground styles='fixed -z-50 w-[313px]  h-[313px] rounded-full' />
          <Logo styles='w-[27-px] h-32' />
        </div>
        <PurpleBackground styles='absolute w-4 h-4 rounded-full top-6 left-6' />
        <PurpleBackground styles='absolute w-4 h-4 rounded-full top-6 right-6' />
      </div>
    </div>
  )
}

export default Info
