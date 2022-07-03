import { PurpleBackgroundProps } from 'components/types'
import { backgroundImage } from 'assets/images/index'

const PurpleBackground: React.FC<PurpleBackgroundProps> = (props) => {
  return (
    <img
      className={`${props.styles}`}
      src={backgroundImage}
      alt='purple background'
    />
  )
}

export default PurpleBackground
