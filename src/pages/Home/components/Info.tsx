import { Logo } from 'components/svgs'
import { backgroundImage } from 'assets/images/index'

function Info() {
  return (
    <div className='h-[768px] flex items-end'>
      <div className='bg-yellow pt-48 rounded-xl w-[682px] h-[611px]   relative flex justify-center'>
        <p className='w-[535px]  h-[377px] overflow-y-scroll'>info here</p>
        <div className='absolute w-[313px] top-[-25%] left-[25%] drop-shadow-4xl border-white border-2 overflow-hidden h-[313px] rounded-full flex justify-center items-center'>
          <img
            className='fixed -z-50 w-[313px]  h-[313px] rounded-full'
            src={backgroundImage}
            alt='purple background'
          />
          <Logo styles='w-[27-px] h-32' />
        </div>
      </div>
    </div>
  )
}

export default Info
