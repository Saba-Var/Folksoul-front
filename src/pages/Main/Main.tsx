import { WhiteWrapper } from 'components'
import { tv } from 'assets/images/index'

function Main() {
  return (
    <WhiteWrapper>
      <div className='flex flex-col items-center justify-between h-full'>
        <p className='tracking-widest animate-tracking-in-expand pt-[10%] font-BPG-Nino-Mtavruli text-5xl text-slate-900'>
          დილამშვიდობისა!
        </p>
        <img src={tv} alt='Tv' className='animate-slide-in-elliptic-top-fwd' />
      </div>
    </WhiteWrapper>
  )
}

export default Main
