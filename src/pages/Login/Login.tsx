import { LoginForm } from 'pages/Login/components'
import { PurpleBackground } from 'components'

function Login() {
  return (
    <>
      <PurpleBackground styles='fixed -z-50 w-screen h-screen' />
      <LoginForm />
    </>
  )
}

export default Login
