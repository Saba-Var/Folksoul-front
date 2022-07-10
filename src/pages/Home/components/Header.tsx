import { Link } from 'react-router-dom'
import { Logo } from 'components/svgs'

const Header = () => {
  return (
    <div
      data-cy='SmallLogo'
      className='flex w-full justify-between px-20 pt-6 items-center mb-4'
    >
      <Logo styles='w-[168px] h-[76px]' />

      <Link data-cy='LogIn' to='/Login'>
        <p className='font-BPG-Nino-Mtavruli text-base text-white cursor-pointer hover:scale-105'>
          შესვლა
        </p>
      </Link>
    </div>
  )
}

export default Header
