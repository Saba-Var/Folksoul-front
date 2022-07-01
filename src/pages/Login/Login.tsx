import { LoginForm } from 'pages/Login/components'
import { PurpleBackground } from 'components'

function Login() {
  return (
    <div className='overflow-hidden'>
      <PurpleBackground styles='fixed -z-50 w-screen h-screen' />
      <LoginForm />
    </div>
  )
}

export default Login
