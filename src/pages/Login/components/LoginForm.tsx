import { InputField, UserData } from 'pages/Login/components'
import { useNavigate } from 'react-router-dom'
import { authenticateUser } from 'services'
import { useForm } from 'react-hook-form'
import { ErrorAlert } from 'components'
import { useState } from 'react'

const LoginForm = () => {
  const navigate = useNavigate()

  const [showError, setShowError] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const [exitAnimation, setExitAnimation] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (userData: UserData) => {
    try {
      setShowAlert(false)

      const response = await authenticateUser({
        username: userData.username,
        password: userData.password,
      })

      if (response.status === 201) {
        setExitAnimation(true)
        localStorage.setItem('token', response.data.token)

        setTimeout(() => {
          navigate('/Dashboard/Main')
        }, 700)
      }
    } catch (error: any) {
      setShowAlert(true)
    }
  }

  const clickHandler = () => !showError && setShowError(true)

  return (
    <div
      className={`flex animate-puff-in-center ${
        exitAnimation && 'animate-slide-out-elliptic-top-fwd'
      } items-center justify-center w-screen h-screen overflow-hidden`}
    >
      {showAlert && (
        <ErrorAlert
          styles='top-[6%] left-[39.5%] 3.5xl:left-[39.5%] 4xl:left-[40%] 4xl:left-[41%]'
          title={'მეტსახელი ან პაროლი არასწორია'}
          setShowAlert={setShowAlert}
        />
      )}
      <div className='3.5xl:left-[40%]'></div>
      <form
        className='bg-gradient-to-t from-brown to-medBlue w-96 h-[438px] border-[1px] border-white flex flex-col pb-14 pt-11 px-12 justify-between'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='tracking-wide w-40 mx-auto relative -skew-x-[40deg] h-14 bg-red drop-shadow-xl text-lg font-bold font-BPG-Nino-Mtavruli text-black flex justify-center items-center'>
          <p data-cy='კარიბჭე' className='-skew-x-[-40deg] pt-1'>
            კარიბჭე
          </p>
        </div>

        <InputField
          errors={errors.username}
          placeholder='მეტსახელი'
          showError={showError}
          inputName='username'
          register={register}
          type='text'
        />

        <InputField
          errors={errors.password}
          showError={showError}
          placeholder='პაროლი'
          register={register}
          inputName='password'
          type='password'
        />

        <button
          className='bg-darkGreen transition-transform hover:scale-105 mx-auto text-sm w-56 border-[1px] border-white rounded-sm text-white py-3 text-center'
          onClick={clickHandler}
          data-cy='LoginBtn'
        >
          შემობრძანდი
        </button>
      </form>
    </div>
  )
}

export default LoginForm
