import { SectionProps } from 'pages/Dashboard/components'
import { useNavigate } from 'react-router-dom'

const Section: React.FC<SectionProps> = (props) => {
  const { link, icon, title } = props

  const navigate = useNavigate()
  const currentURL = `/Dashboard/${link}`
  const isSelected = window.location.pathname.includes(link)

  const onClickHandler = () => {
    if (link === 'Logout') {
      localStorage.removeItem('token')

      return navigate('/')
    }

    if (link === 'Members') {
      return navigate('/Dashboard/Members?page=1')
    }

    navigate(currentURL)
  }

  return (
    <div
      data-cy={link}
      className={`flex transition-transform active:scale-95 cursor-pointer h-12 items-center gap-4 pl-7 ${
        isSelected && 'bg-contentWhite  '
      }`}
      onClick={onClickHandler}
    >
      <div className='flex justify-center items-center w-7'>{icon}</div>
      <p
        className={`font-BPG-Nino-Mtavruli text-lg text-contentWhite pt-[5px] ${
          isSelected && '!text-darkBlue'
        }`}
      >
        {title}
      </p>
    </div>
  )
}

export default Section
