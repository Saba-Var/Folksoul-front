import { StyleProp } from 'components'

const CameraBtn: React.FC<StyleProp> = (props) => {
  const { styles } = props

  return (
    <svg
      width='37'
      height='37'
      className={`cursor-pointer absolute top-[102px] right-0 hover:scale-105 transition-transform ${styles}`}
      viewBox='0 0 37 37'
      fill='none'
    >
      <circle
        cx='18.5'
        cy='18.5'
        r='17.6591'
        fill='#C4C4C4'
        stroke='white'
        strokeWidth='1.68182'
      />
      <path
        d='M9.44458 13.9562C9.32177 14.1882 9.07616 24.9323 9.44458 25.1725C9.62921 25.2929 14.0702 24.9497 18.5423 24.9678C22.9941 24.9859 27.4771 25.366 27.6608 25.1725C28.0293 24.7847 27.7837 14.0995 27.6608 13.9562C27.538 13.813 22.6667 13.465 22.2983 13.3012C21.9299 13.1375 21.4796 11.4182 21.0702 11.1317C20.6609 10.8451 16.158 10.8861 15.8305 11.1317C15.503 11.3773 14.8071 13.1375 14.5615 13.3012C14.3159 13.465 9.56739 13.7243 9.44458 13.9562Z'
        fill='#535353'
        stroke='#535353'
        strokeWidth='0.98245'
      />
      <path
        d='M21.2031 19.6053C21.2031 21.0522 20.0302 22.2252 18.5833 22.2252C17.1363 22.2252 15.9634 21.0522 15.9634 19.6053C15.9634 18.1584 17.1363 16.9854 18.5833 16.9854C20.0302 16.9854 21.2031 18.1584 21.2031 19.6053Z'
        fill='#535353'
        stroke='white'
        strokeWidth='0.98245'
      />
      <path
        d='M11.1331 15.389C11.1331 15.389 12.1564 15.348 12.5658 15.348C12.9752 15.348 14.0462 15.3005 14.0462 15.3005'
        stroke='white'
        strokeWidth='0.409354'
        strokeLinecap='round'
      />
      <path
        d='M23.972 12.017C23.8755 12.0837 23.6183 12.5981 23.6592 12.6427C23.7002 12.6872 25.9926 12.9328 26.0611 12.8955C26.1297 12.8581 26.0335 12.2779 25.9669 12.2269C25.9002 12.176 24.0686 11.9504 23.972 12.017Z'
        fill='#535353'
      />
    </svg>
  )
}

export default CameraBtn
