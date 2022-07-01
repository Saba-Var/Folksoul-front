import { BandInfoProps } from 'pages/About/components/types'
import { BandImage } from 'pages/About/components'

const BandInfo: React.FC<BandInfoProps> = (props) => {
  return (
    <div
      className={`h-full relative w-[110%] pr-[5%] overflow-y-hidden !overflow-x-hidden`}
    >
      <BandImage isLoading={props.isLoading} image={props.image} />
      <textarea
        defaultValue={props.about}
        className='w-full break-words pt-[20%] pr-[5%] bg-transparent outline-none resize-none !h-full font-BPG-Arial text-base tracking-[0.2px]'
      />
    </div>
  )
}

export default BandInfo
