import { MemberImageProps } from 'pages/Home/components/types'

const MemberImage: React.FC<MemberImageProps> = (props) => {
  const clickHandler = () => {
    props.setPause(true)
    props.setInfoText(props.biography)
    if (props.image) props.setInfoImage(props.image)
    else
      props.setInfoImage(props.imageArray[props.index] || props.imageArray[0])

    props.setColor(props.color || '#333333')
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
            backgroundColor: props.color || 'black',
          }}
          className='w-[75px] h-[75px] flex justify-center rounded-full overflow-hidden'
        >
          {!props.image && (
            <img
              className='h-full w-full'
              src={
                props.imageArray[props.index] ||
                props.imageArray[
                  Math.abs(props.imageArray.length - props.index)
                ]
              }
              alt='member'
            />
          )}

          {props.image && (
            <img
              className='h-24 w-24'
              src={`http://localhost:5000/${props.image}`}
              alt='member'
            />
          )}
        </div>
        <div
          style={{
            borderColor: props.color,
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
