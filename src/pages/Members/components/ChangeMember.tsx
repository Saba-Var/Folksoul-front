import { useEffect, useState } from 'react'
import { Textarea, Notifications } from 'pages/Members/components'
import { useForm } from 'react-hook-form'
import { InputField, GoBackBtn } from 'components'
import { fetchMembersData } from 'helper/index'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const ChangeMember: React.FC<{
  id: string
  setSection: (section: string) => void
  setMembersData: any
  setIsLoading: (loading: boolean) => void
}> = (props) => {
  const [pageParam] = useSearchParams()
  const currentPage = +pageParam.get('page')!
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      color: '',
      instrument: '',
      biography: '',
      orbitLength: '',
    },
  })
  const [showModal, setShowModal] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [statusCode, setStatusCode] = useState(404)

  useEffect(() => {
    const data = {
      id: props.id,
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
    axios
      .post('http://localhost:5000/get-one-member', data, {
        headers: headers,
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data
          setValue('name', data.name)
          setValue('instrument', data.instrument)
          setValue('color', data.color)
          setValue('orbitLength', data.orbitLength)
          setValue('biography', data.biography)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [props.id, setValue])

  const submitHandler = () => {
    setStatusCode(200)
    const formData = watch()
    const data = {
      id: props.id,
      name: formData.name,
      instrument: formData.instrument,
      color: formData.color,
      orbitLength: formData.orbitLength,
      biography: formData.biography,
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }

    axios
      .put('http://localhost:5000/change-member', data, {
        headers: headers,
      })
      .then((response) => {
        if (response.status === 200) {
          setShowModal(true)
          fetchMembersData(
            props.setMembersData,
            props.setIsLoading,
            currentPage
          )
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setShowErrorAlert(true)
          setStatusCode(409)
        }
      })
  }

  return (
    <div>
      <Notifications
        action={'CHANGE'}
        setShowErrorAlert={setShowErrorAlert}
        setShowModal={setShowModal}
        showModal={showModal}
        showErrorAlert={showErrorAlert}
        statusCode={statusCode}
      />
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col justify-between'
      >
        <div className='flex flex-col justify-between gap-2 4xl:gap-6'>
          <div className='flex justify-center'>
            <InputField
              errors={errors.name}
              inputName='name'
              placeholder='სახელი'
              register={register}
              type='text'
              minLength={3}
            />
          </div>
          <div className='flex gap-8 justify-center'>
            <InputField
              errors={errors.instrument}
              inputName='instrument'
              placeholder='ინსტრუმენტი'
              register={register}
              type='text'
              minLength={2}
            />
            <InputField
              errors={errors.orbitLength}
              inputName='orbitLength'
              placeholder='ორბიტის სიგანე'
              register={register}
              type='number'
            />
            <InputField
              errors={errors.color}
              inputName='color'
              placeholder='ფერი'
              register={register}
              type='text'
            />
          </div>
          <Textarea
            placeholder='ბექა, ბასზე ბასი ადამიანი ...'
            errors={errors.biography}
            inputName='biography'
            register={register}
          />
        </div>
        <button
          type='submit'
          className='blueBtn transition-transform hover:scale-105 w-52 block mx-auto mt-[10%] 3xl:mt-[4%] 4xl:mt-[9%] 5xl:mt-[15%] mb-2'
        >
          შეცვლა
        </button>
      </form>
      <GoBackBtn title='გადი უკან' direction={props.setSection} goTo={''} />
    </div>
  )
}

export default ChangeMember
