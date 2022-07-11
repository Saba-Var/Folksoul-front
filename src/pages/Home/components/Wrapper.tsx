import { ChildrenProps } from 'pages/Home/components/types'
import { PurpleBackground } from 'components'

const Wrapper: React.FC<ChildrenProps> = (props) => {
  const { children } = props

  return (
    <div className='h-screen overflow-y-hidden'>
      <PurpleBackground styles='fixed -z-50 w-screen h-screen' />
      {children}
    </div>
  )
}

export default Wrapper
