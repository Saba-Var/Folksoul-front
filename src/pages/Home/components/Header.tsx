import { Logo } from 'components/svgs'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex w-full justify-between px-20 pt-6 items-center mb-12'>
      <Logo styles='w-[168px] h-[76px]' />
      <Link to='/Login'>
        <p className='font-BPG-Nino-Mtavruli text-base text-white cursor-pointer hover:scale-105'>
          შესვლა
        </p>
      </Link>
    </div>
  )
}

export default Header
