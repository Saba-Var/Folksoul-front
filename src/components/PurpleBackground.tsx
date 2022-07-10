import { PurpleBackgroundProps } from 'components/types'
import { backgroundImage } from 'assets/images/index'

const PurpleBackground: React.FC<PurpleBackgroundProps> = (props) => {
  return (
    <img
      className={`${props.styles}`}
      alt='purple background'
      src={backgroundImage}
    />
  )
}

export default PurpleBackground
