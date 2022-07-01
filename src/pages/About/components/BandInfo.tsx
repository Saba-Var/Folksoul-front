import { BandInfoProps } from 'pages/About/components/types'
import { BandImage } from 'pages/About/components'

const BandInfo: React.FC<BandInfoProps> = (props) => {
  return (
    <div
      className={`h-full ${props.about.length > 1200 && 'overflow-y-scroll'}`}
    >
      <BandImage isLoading={props.isLoading} image={props.image} />

      <p className='mt-14 w-full break-words resize-none !h-full font-BPG-Arial text-base tracking-[0.2px]'>
        {props.about}
      </p>
    </div>
  )
}

export default BandInfo
