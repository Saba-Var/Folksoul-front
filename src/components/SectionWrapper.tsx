import { WhiteWrapper } from 'components'
import { SectionWrapperProps } from 'components/types'

const SectionWrapper: React.FC<SectionWrapperProps> = (props) => {
  return (
    <WhiteWrapper>
      <>
        <p className='mb-10 font-BPG-Nino-Mtavruli text-center tracking-wider text-lg pb-3 border-b border-black'>
          {props.title}
        </p>
        {props.children}
      </>
    </WhiteWrapper>
  )
}

export default SectionWrapper
