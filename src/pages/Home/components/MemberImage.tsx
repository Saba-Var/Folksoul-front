import { MemberImageProps } from 'pages/Home/components/types'
import { Image } from 'pages/Home/components'

const MemberImage: React.FC<MemberImageProps> = (props) => {
  const { color, image, biography, name } = props.memberDetails
  const { selectedId, setSelectedId, id } = props.selectUtils

  const {
    imageArray,
    index,
    setInfoImage,
    setPause,
    setInfoText,
    setColor,
    pause,
    animationDuration,
  } = props

  const clickHandler = () => {
    setPause(true)
    setInfoText(biography)
    setSelectedId(id)

    if (image) setInfoImage(image)
    else setInfoImage(imageArray[index] || imageArray[0])

    setColor(color)
  }

  const isSelected = selectedId === id

  return (
    <div
      data-TestId={name}
      style={{
        animation: `spinLeft ${animationDuration}s linear infinite`,
        animationPlayState: pause ? 'paused' : 'running',
      }}
      onClick={clickHandler}
      className={`flex justify-center ${
        isSelected && '!w-[100px] h-24'
      } animate-spinLeft z-[99999] left-[-35px] relative top-1/2 -translate-x-1/2 w-fit cursor-pointer`}
    >
      <div
        style={{
          backgroundColor: color,
        }}
        className={`border-[2px] ${
          isSelected && 'w-full'
        } border-yellow rounded-full overflow-hidden`}
      >
        <Image
          imageArray={imageArray}
          isSelected={isSelected}
          color={color}
          image={image}
          index={index}
        />

        <div
          style={{
            borderColor: color,
          }}
          className={`w-23 ${
            isSelected && 'w-24 !left-[4px]'
          } absolute left-[-7px]  bottom-[-8px] bg-yellow flex border-[4px] justify-center items-center pt-1 rounded-[60px] text-darkBlue font-BPG-Nino-Mtavruli font-bold text-sm tracking-[1.2px]`}
        >
          {name}
        </div>
      </div>
    </div>
  )
}

export default MemberImage
