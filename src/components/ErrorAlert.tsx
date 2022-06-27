import { CloseIcon } from 'pages/Login/components/index'
import { ErrorIcon } from 'components/svgs'
import { ErrorAlertProps } from 'components/types'
import { useState } from 'react'

const ErrorAlert: React.FC<ErrorAlertProps> = (props) => {
  const [exit, setExit] = useState<boolean>(false)
  const clickHandler = () => {
    setExit(true)
    setTimeout(() => {
      props.setShowAlert(false)
    }, 1600)
  }

  return (
    <div
      className={`px-1 md:text-2xl z-[999999] animate-bounce-in-top  bg-red-100 border border-rose-600 text-red-700 md:px-4 py-1 md:py-3 rounded bg-rose-100  fixed top-[20%]  
       ${exit && 'animate-bounce-out-top'} ${props.styles}`}
    >
      <div className='flex items-center justify-between'>
        <div className='text-center flex items-center flex-wrap text-sm '>
          <span className='mr-1 md:inline-block hidden  '>
            <ErrorIcon />
          </span>
          <strong className=' font-bold text-red mr-1'>{props.title}</strong>

          <span className='ml-1 inline-block' onClick={clickHandler}>
            <CloseIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ErrorAlert
