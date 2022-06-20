import { PurpleBackground } from 'components'
import { LoginForm } from 'pages/Login/components'

function Login() {
  return (
    <>
      <PurpleBackground styles='fixed -z-50 w-screen h-screen' />
      <LoginForm />
    </>
  )
}

export default Login
