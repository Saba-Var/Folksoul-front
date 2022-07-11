import { PurpleBackgroundProps } from 'components/types'
import { BackgroundImage } from 'assets/images/index'

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
