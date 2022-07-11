import { WhiteWrapperProps } from 'components/types'

const WhiteWrapper: React.FC<WhiteWrapperProps> = (props) => {
  const { children } = props

  return (
    <div className='w-screen !overflow-hidden h-screen flex items-center pr-[7%] justify-end'>
      <div className='bg-contentWhite shadow-4xl px-[7%]  rounded-[20px] py-[4%] w-[70%] h-[90%]'>
        {children}
      </div>
    </div>
  )
}

export default WhiteWrapper
