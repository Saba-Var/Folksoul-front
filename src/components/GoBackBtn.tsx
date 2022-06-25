import { GoBackBtnProps } from 'components/types'

const GoBackBtn: React.FC<GoBackBtnProps> = (props) => {
  return (
    <button
      onClick={(e: any) => {
        e.preventDefault()
        props.direction(props.goTo)
      }}
      className='backLink block mx-auto transition-transform hover:scale-105'
    >
      {props.title}
    </button>
  )
}

export default GoBackBtn
