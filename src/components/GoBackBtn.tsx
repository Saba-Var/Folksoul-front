import { GoBackBtnProps } from 'components/types'

const GoBackBtn: React.FC<GoBackBtnProps> = (props) => {
  return (
    <button onClick={() => props.direction(props.goTo)} className='backLink'>
      {props.title}
    </button>
  )
}

export default GoBackBtn
