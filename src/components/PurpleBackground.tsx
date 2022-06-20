import { backgroundImage } from 'assets/images/index'
import { PurpleBackgroundProps } from 'components/types'

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
