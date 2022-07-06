import { MemberImageProps } from 'pages/Home/components/types'
import { Image } from 'pages/Home/components'

const MemberImage: React.FC<MemberImageProps> = (props) => {
  const { image, color, imageArray, index, setInfoImage } = props
  const { selectedId, setSelectedId, id } = props.selectUtils

  const clickHandler = () => {
    props.setPause(true)
    props.setInfoText(props.biography)
    setSelectedId(id)

    if (image) setInfoImage(image)
    else setInfoImage(imageArray[index] || imageArray[0])

    props.setColor(color || '#333333')
  }

  const isSelected = selectedId === id

  return (
    <div
      style={{
        animation: `spinLeft ${props.animationDuration}s linear infinite`,
        animationPlayState: props.pause ? 'paused' : 'running',
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
        className={`border-[2px] ${isSelected && 'w-full'} ${
          image && '!bg-purple'
        }  border-yellow rounded-full overflow-hidden`}
      >
        <Image
          color={color}
          image={image}
          imageArray={imageArray}
          isSelected={isSelected}
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
          {props.name}
        </div>
      </div>
    </div>
  )
}

export default MemberImage
