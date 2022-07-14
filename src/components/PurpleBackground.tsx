import { PurpleBackgroundProps } from 'components'
import { BackgroundImage } from 'assets/images'

const PurpleBackground: React.FC<PurpleBackgroundProps> = (props) => {
  const { styles } = props

  return (
    <img
      className={`${styles}`}
      alt='purple Background'
      src={BackgroundImage}
    />
  )
}

export default PurpleBackground
