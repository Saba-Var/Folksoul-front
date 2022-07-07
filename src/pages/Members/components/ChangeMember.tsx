import { Notifications, MemberInputs } from 'pages/Members/components'
import { MemberInputProps } from 'pages/Members/components/types'
import { useSearchParams } from 'react-router-dom'
import { fetchMembersData } from 'helper/index'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { DirectBtn } from 'components'
import axios from 'axios'

const ChangeMember: React.FC<MemberInputProps> = (props) => {
  const { setMembersData, setIsLoading, id } = props

  const [statusCode, setStatusCode] = useState(404)
  const [page] = useSearchParams()

  const [showErrorAlert, setShowErrorAlert] = useState(false)
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

  useEffect(() => {
    try {
      const fetch = async () => {
        const response = await axios.post(
          'http://localhost:5000/get-one-member',
          {
            id: id,
          },
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
      }
      fetch()
    } catch (error: any) {
      console.log(error.message)
    }
  }, [id, setValue])

  const submitHandler = () => {
    const { name, instrument, color, orbitLength, biography } = watch()

    const data = {
      id,
      name,
      instrument,
      color,
      orbitLength,
      biography,
    }

    axios
      .put('http://localhost:5000/change-member', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setShowModal(true)
          fetchMembersData(setMembersData, setIsLoading, +page.get('page')!)
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setStatusCode(409)
          setShowErrorAlert(true)
        }
      })
  }

  return (
    <div className='animate-fade-in'>
      <Notifications
        setShowErrorAlert={setShowErrorAlert}
        showErrorAlert={showErrorAlert}
        setShowModal={setShowModal}
        statusCode={statusCode}
        showModal={showModal}
        action={'CHANGE'}
      />

      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col justify-between'
      >
        <MemberInputs errors={errors} register={register} title='შეცვლა' />
      </form>

      <DirectBtn title='გადი უკან' direction={props.setSection} goTo='' />
    </div>
  )
}

export default ChangeMember
