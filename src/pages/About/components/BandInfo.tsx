import { BandImage, BandInfoProps } from 'pages/About/components'

const BandInfo: React.FC<BandInfoProps> = (props) => {
  const { setBandAbout, isLoading, image, id, about } = props

  return (
    <div className={`h-[70vh] overflow-y-auto w-[105%] pr-[5%]`}>
      <BandImage
        setBandAbout={setBandAbout}
        isLoading={isLoading}
        image={image}
        id={id}
      />

      <div
        className='overflow-hidden animate-focus-in-expand whitespace-pre-line break-words pt-8 bg-transparent resize-none outline-none w-full h-max'
        defaultValue={about}
      >
        {about}
      </div>
    </div>
  )
}

export default BandInfo
