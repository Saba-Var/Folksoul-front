import { backgroundImage } from 'assets/images/index'
import { ChildrenProps } from 'pages/Home/components/types'

const Wrapper: React.FC<ChildrenProps> = (props) => {
  return (
    <div className='h-screen overflow-y-hidden'>
      <img
        className='fixed -z-50 w-screen h-screen'
        src={backgroundImage}
        alt='purple background'
      />
      {props.children}
    </div>
  )
}

export default Wrapper
