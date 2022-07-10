import { SectionWrapperProps } from 'components/types'
import { WhiteWrapper } from 'components'

const SectionWrapper: React.FC<SectionWrapperProps> = (props) => {
  const { title, children } = props

  return (
    <WhiteWrapper>
      <>
        <p className='mb-10 animate-tracking-in-expand font-BPG-Nino-Mtavruli text-center tracking-wider text-lg pb-3 border-b border-black'>
          {title}
        </p>

        <div className='flex flex-col relative justify-between h-full pb-[6%]'>
          {children}
        </div>
      </>
    </WhiteWrapper>
  )
}

export default SectionWrapper
