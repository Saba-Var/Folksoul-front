import { SunoteProps } from 'pages/Home/components/types'
import { Sun } from 'components'

const Sunote: React.FC<SunoteProps> = (props) => {
  const {
    setSelectedId,
    setInfoImage,
    setInfoText,
    setPause,
    bandInfo,
    pause,
    image,
  } = props

  const clickHandler = () => {
    setPause(false)
    setSelectedId('')

    setInfoText(bandInfo)
    setInfoImage(image)
  }

  return (
    <div className='z-[9999] relative' onClick={clickHandler}>
      <div
        className={`${
          !pause &&
          'bg-amber-500 animate-rays absolute top-0 left-0 w-full h-full rounded-full'
        }`}
      ></div>

      <Sun pause={pause} />
    </div>
  )
}

export default Sunote
