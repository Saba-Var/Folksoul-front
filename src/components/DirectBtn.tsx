import { DirectBtnProps } from 'components/types'

const DirectBtn: React.FC<DirectBtnProps> = (props) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    props.direction(props.goTo)
  }

  return (
    <button
      data-TestId={props.title}
      onClick={clickHandler}
      className={`${
        !props.title.includes('ბმული') && 'animate-tracking-in-expand'
      } backLink block mx-auto transition-transform hover:scale-105`}
    >
      <p>{props.title}</p>
    </button>
  )
}

export default DirectBtn
