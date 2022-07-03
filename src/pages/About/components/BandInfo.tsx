import { BandInfoProps } from 'pages/About/components/types'
import { BandImage } from 'pages/About/components'

const BandInfo: React.FC<BandInfoProps> = (props) => {
  return (
    <div className={`h-[70vh] overflow-y-auto w-[105%] pr-[5%]`}>
      <BandImage
        id={props.id}
        setBandAbout={props.setBandAbout}
        isLoading={props.isLoading}
        image={props.image}
      />

      <div
        defaultValue={props.about}
        className='overflow-hidden animate-focus-in-expand whitespace-pre-line break-words pt-8 bg-transparent resize-none outline-none w-full h-max'
      >
        {props.about}
      </div>
    </div>
  )
}

export default BandInfo
