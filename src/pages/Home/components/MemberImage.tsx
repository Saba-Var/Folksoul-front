import { MemberImageProps } from 'pages/Home/components/types'

const MemberImage: React.FC<MemberImageProps> = (props) => {
  const { image, color, imageArray, index, setInfoImage } = props

  const clickHandler = () => {
    props.setPause(true)
    props.setInfoText(props.biography)

    if (image) setInfoImage(image)
    else setInfoImage(imageArray[index] || imageArray[0])

    props.setColor(color || '#333333')
  }

  return (
    <div
      style={{
        animation: `spinLeft ${props.animationDuration}s linear infinite`,
        animationPlayState: props.pause ? 'paused' : 'running',
      }}
      onClick={clickHandler}
      className={`flex justify-center animate-spinLeft z-[99999] left-[-35px] relative top-1/2 -translate-x-1/2 w-fit cursor-pointer`}
    >
      <div className=' border-[2px] border-yellow rounded-full '>
        <div
          style={{
            backgroundColor: color || 'black',
          }}
          className='w-[75px] h-[75px] flex justify-center rounded-full overflow-hidden'
        >
          {!image && (
            <img
              className='h-full w-full'
              src={
                imageArray[index] ||
                imageArray[Math.abs(imageArray.length - index)]
              }
              alt='member'
            />
          )}

          {image && (
            <img
              className='h-24 w-24'
              src={`http://localhost:5000/${image}`}
              alt='member'
            />
          )}
        </div>
        <div
          style={{
            borderColor: color,
          }}
          className='w-23 absolute left-[-9px] bottom-[-8px] bg-yellow flex border-[4px] justify-center items-center pt-1 rounded-[60px] text-darkBlue font-BPG-Nino-Mtavruli font-bold text-sm tracking-[1.2px]'
        >
          {props.name}
        </div>
      </div>
    </div>
  )
}

export default MemberImage
