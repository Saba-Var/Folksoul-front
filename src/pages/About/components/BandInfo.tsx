import { BandInfoProps } from 'pages/About/components/types'
import { BandImage } from 'pages/About/components'

const BandInfo: React.FC<BandInfoProps> = (props) => {
  return (
    <div className='h-full  overflow-y-auto w-[105%] pr-[5%]'>
      <BandImage isLoading={props.isLoading} image={props.image} />
      <div
        defaultValue={props.about}
        className='overflow-hidden whitespace-pre pt-8 bg-transparent resize-none outline-none w-full h-max'
      >
        {props.about}
      </div>
    </div>
  )
}

export default BandInfo
