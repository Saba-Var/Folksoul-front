import { DirectBtnProps } from 'components/types'

const DirectBtn: React.FC<DirectBtnProps> = (props) => {
  const { title, direction, goTo } = props

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    direction(goTo)
  }

  return (
    <button
      className={`${
        !title.includes('ბმული') && 'animate-tracking-in-expand'
      } backLink block mx-auto transition-transform hover:scale-105`}
      onClick={clickHandler}
      data-cy={title}
    >
      <p>{title}</p>
    </button>
  )
}

export default DirectBtn
