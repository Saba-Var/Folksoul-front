import { ImageProps } from 'pages/Home/components/types'

const Image: React.FC<ImageProps> = (props) => {
  const { color, isSelected, image, imageArray, index } = props

  return (
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
            imageArray[index] || imageArray[Math.abs(imageArray.length - index)]
          }
          draggable='false'
          alt='member'
        />
      )}

      {image && (
        <img
          data-cy='UploadBandImage'
          className={`h-full w-full ${isSelected && 'w-full h-full'}`}
          src={`http://localhost:5000/${image}`}
          draggable='false'
          alt='member'
        />
      )}
    </div>
  )
}

export default Image
