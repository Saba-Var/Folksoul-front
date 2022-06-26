import { Notifications, MemberInputs } from 'pages/Members/components'
import { MemberInputsProps } from 'pages/Members/components/types'
import { useSearchParams } from 'react-router-dom'
import { fetchMembersData } from 'helper/index'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { GoBackBtn } from 'components'
import axios from 'axios'

const ChangeMember: React.FC<MemberInputsProps> = (props) => {
  const [page] = useSearchParams()
  const { setMembersData, setIsLoading, id } = props
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
  })

  const [showModal, setShowModal] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [statusCode, setStatusCode] = useState(404)

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
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        if (response.status === 200) {
          const data = response.data
          setValue('name', data.name)
          setValue('instrument', data.instrument)
          setValue('color', data.color)
          setValue('orbitLength', data.orbitLength)
          setValue('biography', data.biography)
        }
      }
      fetch()
    } catch (error: any) {
      alert(error.message)
    }
  }, [id, setValue])

  const submitHandler = () => {
    try {
      const fetch = async () => {
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
          'http://localhost:5000/change-member',
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
          fetchMembersData(setMembersData, setIsLoading, +page.get('page')!)
        }
      }
      fetch()
    } catch (error: any) {
      if (error.response.status === 409) {
        setShowErrorAlert(true)
        setStatusCode(409)
      }
    }
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
        <MemberInputs errors={errors} register={register} title='შეცვლა' />
      </form>
      <GoBackBtn title='გადი უკან' direction={props.setSection} goTo={''} />
    </div>
  )
}

export default ChangeMember
