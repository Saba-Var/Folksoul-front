import { UserData } from 'pages/Login/components/types'
import { InputField } from 'pages/Login/components'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorAlert } from 'components'
import { useState } from 'react'
import axios from 'axios'

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

      let response = await axios({
        method: 'post',
        url: 'http://localhost:5000/auth',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        data: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
      })

      if (response.status === 200) {
        setExitAnimation(true)

        setTimeout(() => {
          localStorage.setItem('token', response.data.token)
          navigate('/Dashboard/Main')
        }, 700)
      }
    } catch (error) {
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
          styles='top-[5%] left-[53%]'
          title={'მეტსახელი ან პაროლი არასწორია!'}
          setShowAlert={setShowAlert}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gradient-to-t from-brown to-medBlue w-96 h-[438px] border-[1px] border-white flex flex-col pb-14 pt-11 px-12 justify-between'
      >
        <div className='tracking-wide w-40 mx-auto relative -skew-x-[40deg] h-14 bg-red drop-shadow-xl text-lg font-bold font-BPG-Nino-Mtavruli text-black flex justify-center items-center'>
          <p className='-skew-x-[-40deg] pt-1'>კარიბჭე</p>
        </div>

        <InputField
          errors={errors.username}
          placeholder='მეტსახელი'
          showError={showError}
          register={register}
          type='text'
        />

        <InputField
          errors={errors.password}
          showError={showError}
          placeholder='პაროლი'
          register={register}
          type='password'
        />

        <button
          data-TestId='LoginBtn'
          className='bg-darkGreen transition-transform hover:scale-105 mx-auto text-sm w-56 border-[1px] border-white rounded-sm text-white py-3 text-center'
          onClick={clickHandler}
        >
          შემობრძანდი
        </button>
      </form>
    </div>
  )
}

export default LoginForm
