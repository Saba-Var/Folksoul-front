import { MiniCloseIcon, ErrorIcon } from 'components/svgs'
import { ErrorAlertProps } from 'components/types'
import { useState } from 'react'

const ErrorAlert: React.FC<ErrorAlertProps> = (props) => {
  const { setShowAlert, styles, title } = props

  const [exit, setExit] = useState<boolean>(false)

  const clickHandler = () => {
    setExit(true)
    setTimeout(() => setShowAlert(false), 1600)
  }

  return (
    <div
      className={`px-1 md:text-2xl z-[999999] animate-bounce-in-top  bg-red-100 border border-rose-600 text-red-700 md:px-4 py-1 md:py-3 rounded bg-rose-100  fixed 
       ${exit && 'animate-bounce-out-top'} ${styles}`}
    >
      <div className='flex items-center justify-between'>
        <div className='text-center flex items-center flex-wrap text-sm '>
          <span className='mr-1 md:inline-block hidden  '>
            <ErrorIcon />
          </span>
          <strong className=' font-bold text-red mr-1'>{title}</strong>

          <span className='ml-1 inline-block' onClick={clickHandler}>
            <MiniCloseIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ErrorAlert
