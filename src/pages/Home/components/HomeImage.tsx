import { HomeImageProps } from 'pages/Home/components'

const HomeImage: React.FC<HomeImageProps> = (props) => {
  const { color, isSelected, image, imageArray, index } = props

  return (
    <div
      className={`w-[75px] h-[75px] ${
        isSelected && '!w-[100px] !h-full'
      } flex justify-center rounded-full overflow-hidden relative`}
      style={{
        backgroundColor: color || 'black',
      }}
    >
      {!image && (
        <img
          className={`h-full w-full ${isSelected && 'w-24 h-24'}`}
          src={
            imageArray[index] || imageArray[Math.abs(imageArray.length - index)]
          }
          draggable='false'
          alt='member'
        />
      )}

      {image && (
        <img
          src={`${process.env.REACT_APP_API_BASE_URL}/${image}`}
          className={`h-full w-full ${isSelected && 'w-full h-full'}`}
          data-cy='UploadBandImage'
          draggable='false'
          alt='member'
        />
      )}
    </div>
  )
}

export default HomeImage
