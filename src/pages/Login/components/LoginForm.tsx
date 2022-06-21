import { UserData } from 'pages/Login/components/types'
import { InputField, ErrorAlert } from 'pages/Login/components'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

function LoginForm() {
  const navigate = useNavigate()
  const [showError, setShowError] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState<boolean>(false)

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
        navigate('/Dashboard/Main')
        localStorage.setItem('token', response.data.token)
      }
    } catch (error) {
      setShowAlert(true)
      console.log(error)
    }
  }

  const clickHandler = () => {
    if (!showError) setShowError(true)
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen overflow-hidden'>
      {showAlert && <ErrorAlert setShowAlert={setShowAlert} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gradient-to-t from-[#7B5A5A] to-[#345161] w-96 h-[438px] border-[1px] border-white flex flex-col pb-14 pt-11 px-12 justify-between'
      >
        <div className='tracking-wide w-40 mx-auto relative   -skew-x-[40deg] h-14 bg-red drop-shadow-xl text-lg font-bold font-BPG-Nino-Mtavruli text-black flex justify-center items-center'>
          <p className='-skew-x-[-40deg] pt-1'>კარიბჭე</p>
        </div>
        <InputField
          showError={showError}
          register={register}
          placeholder='მეტსახელი'
          errors={errors.username}
          type='text'
        />
        <InputField
          showError={showError}
          register={register}
          placeholder='პაროლი'
          errors={errors.password}
          type='password'
        />
        <button
          onClick={clickHandler}
          className='bg-darkGreen transition-transform hover:scale-105 mx-auto text-sm w-56 border-[1px] border-white rounded-sm text-white py-3 text-center'
        >
          შემობრძანდი
        </button>
      </form>
    </div>
  )
}

export default LoginForm
