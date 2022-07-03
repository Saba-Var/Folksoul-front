import { BandInfoProps } from 'pages/About/components/types'
import { BandImage } from 'pages/About/components'

const BandInfo: React.FC<BandInfoProps> = (props) => {
  return (
    <div className={`h-[70vh] overflow-y-auto w-[105%] pr-[5%]`}>
      <BandImage
        setBandAbout={props.setBandAbout}
        isLoading={props.isLoading}
        image={props.image}
        id={props.id}
      />

      <div
        className='overflow-hidden animate-focus-in-expand whitespace-pre-line break-words pt-8 bg-transparent resize-none outline-none w-full h-max'
        defaultValue={props.about}
      >
        {props.about}
      </div>
    </div>
  )
}

export default BandInfo
