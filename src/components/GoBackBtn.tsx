import { GoBackBtnProps } from 'components/types'

const GoBackBtn: React.FC<GoBackBtnProps> = (props) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    props.direction(props.goTo)
  }

  return (
    <button
      onClick={clickHandler}
      className='animate-tracking-in-expand backLink block mx-auto transition-transform hover:scale-105'
    >
      {props.title}
    </button>
  )
}

export default GoBackBtn
