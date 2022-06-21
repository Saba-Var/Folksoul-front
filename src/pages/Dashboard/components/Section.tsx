import { SectionProps } from 'pages/Dashboard/components/types'
import { useNavigate } from 'react-router-dom'

const Section: React.FC<SectionProps> = (props) => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (props.link === '/') navigate('/Dashboard')
    else navigate(`/Dashboard/${props.link}`)
  }

  return (
    <div
      className='flex cursor-pointer h-12 items-center gap-4 pl-7'
      onClick={onClickHandler}
    >
      <div className='flex justify-center items-center w-7'>{props.icon}</div>
      <p className='font-BPG-Nino-Mtavruli text-lg text-contentWhite pt-[5px]'>
        {props.title}
      </p>
    </div>
  )
}

export default Section
