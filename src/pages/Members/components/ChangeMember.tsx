import { Notifications, MemberInputs } from 'pages/Members/components'
import { MemberInputProps } from 'pages/Members/components/types'
import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DirectBtn, ErrorAlert } from 'components'
import { fetchMembersData } from 'helpers'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const ChangeMember: React.FC<MemberInputProps> = (props) => {
  const { setMembersData, setIsLoading, id, setSection } = props

  const [statusCode, setStatusCode] = useState(404)
  const [page] = useSearchParams()

  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
  })

  const fetchOneMember = useCallback(async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_BASE_URL! + `/get-one-member?id=${id}`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )

      if (response.status === 200) {
        const data = response.data
        setValue('orbitLength', data.orbitLength)
        setValue('instrument', data.instrument)
        setValue('biography', data.biography)
        setValue('color', data.color)
        setValue('name', data.name)
      }
    } catch (error: any) {
      setErrorAlert(true)
    }
  }, [id, setValue])

  useEffect(() => {
    fetchOneMember()
  }, [fetchOneMember])

  const submitHandler = async () => {
    try {
      const { name, instrument, color, orbitLength, biography } = watch()

      const data = {
        id,
        name,
        instrument,
        color,
        orbitLength,
        biography,
      }

      const response = await axios.put(
        process.env.REACT_APP_API_BASE_URL! + '/change-member',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )

      if (response.status === 200) {
        setShowModal(true)

        fetchMembersData(
          setErrorAlert,
          setMembersData,
          setIsLoading,
          +page.get('page')!
        )
      }
    } catch (error: any) {
      setStatusCode(409)
      setShowErrorAlert(true)
    }
  }

  return (
    <div className='animate-fade-in'>
      {errorAlert && (
        <ErrorAlert
          title='ინფორმაცია ვერ მოიძებნა'
          setShowAlert={setErrorAlert}
          styles='top-[5%] left-[53%]'
        />
      )}

      <Notifications
        setShowErrorAlert={setShowErrorAlert}
        showErrorAlert={showErrorAlert}
        setShowModal={setShowModal}
        statusCode={statusCode}
        showModal={showModal}
      />

      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col justify-between'
      >
        <MemberInputs errors={errors} register={register} title='შეცვლა' />
      </form>

      <DirectBtn title='გადი უკან' direction={setSection} goTo='' />
    </div>
  )
}

export default ChangeMember
