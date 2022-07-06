import { SunoteProps } from 'pages/Home/components/types'
import { Sun } from 'components/svgs'

const Sunote: React.FC<SunoteProps> = (props) => {
  const clickHandler = () => {
    props.setPause(false)
    props.setSelectedId('')

    props.setInfoText(props.bandInfo)
    props.setInfoImage(props.image)
  }

  return (
    <div className='z-[9999] relative' onClick={clickHandler}>
      <div
        className={`${
          !props.pause &&
          'bg-amber-500 animate-rays absolute top-0 left-0 w-full h-full rounded-full'
        }`}
      ></div>

      <Sun pause={props.pause} />
    </div>
  )
}

export default Sunote
