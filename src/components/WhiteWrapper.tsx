import { WhiteWrapperProps } from 'components/types'

const WhiteWrapper: React.FC<WhiteWrapperProps> = (props) => {
  return (
    <div className='bg-contentWhite shadow-4xl   rounded-[20px] px-[7%] py-[4%] w-[70%] h-[90%]'>
      {props.children}
    </div>
  )
}

export default WhiteWrapper
