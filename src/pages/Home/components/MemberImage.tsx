import { MemberImageProps } from 'pages/Home/components/types'

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
          backgroundColor: color || 'black',
        }}
        className={`border-[2px] ${isSelected && 'w-full'} ${
          image && '!bg-purple'
        }  border-yellow rounded-full overflow-hidden`}
      >
        <div
          style={{
            backgroundColor: color || 'black',
          }}
          className={`w-[75px] h-[75px] ${
            isSelected && '!w-[100px] !h-full'
          } flex justify-center rounded-full overflow-hidden relative`}
        >
          {!image && (
            <img
              className={`h-full w-full ${isSelected && 'w-24 h-24'}`}
              src={
                imageArray[index] ||
                imageArray[Math.abs(imageArray.length - index)]
              }
              draggable='false'
              alt='member'
            />
          )}

          {image && (
            <img
              className={`h-full w-full ${isSelected && 'w-full h-full'}`}
              src={`http://localhost:5000/${image}`}
              alt='member'
              draggable='false'
            />
          )}
        </div>
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
