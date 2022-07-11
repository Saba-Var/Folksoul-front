import { PurpleBackgroundProps } from 'components/types'
import { BackgroundImage } from 'assets/images/index'

const PurpleBackground: React.FC<PurpleBackgroundProps> = (props) => {
  return (
    <img
      className={`${props.styles}`}
      alt='purple Background'
      src={BackgroundImage}
    />
  )
}

export default PurpleBackground
