import { Link } from 'react-router-dom'
import { Logo } from 'components'

const Header = () => {
  return (
    <div
      className='flex w-full justify-between px-20 pt-6 items-center mb-4'
      data-cy='SmallLogo'
    >
      <Logo styles='w-[168px] h-[76px]' />

      <Link data-cy='LogIn' to='/Login'>
        <p
          data-cy='შესვლა'
          className='font-BPG-Nino-Mtavruli text-base text-white cursor-pointer hover:scale-105'
        >
          შესვლა
        </p>
      </Link>
    </div>
  )
}

export default Header
