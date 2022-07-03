import { SectionProps } from 'pages/Dashboard/components/types'
import { useNavigate } from 'react-router-dom'

const Section: React.FC<SectionProps> = (props) => {
  const navigate = useNavigate()
  const currentURL = `/Dashboard/${props.link}`
  const isSelected = window.location.pathname.includes(props.link)

  const onClickHandler = () => {
    if (props.link === 'Logout') {
      localStorage.removeItem('token')

      return navigate('/')
    }

    if (props.link === 'Members') return navigate('/Dashboard/Members?page=1')
    navigate(currentURL)
  }

  return (
    <div
      className={`flex transition-transform active:scale-95 cursor-pointer h-12 items-center gap-4 pl-7 ${
        isSelected && 'bg-contentWhite  '
      }`}
      onClick={onClickHandler}
    >
      <div className='flex justify-center items-center w-7'>{props.icon}</div>
      <p
        className={`font-BPG-Nino-Mtavruli text-lg text-contentWhite pt-[5px] ${
          isSelected && '!text-darkBlue'
        }`}
      >
        {props.title}
      </p>
    </div>
  )
}

export default Section
