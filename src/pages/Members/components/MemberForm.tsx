import { useNavigate } from 'react-router-dom'
import { fetchMembersData } from 'helpers'
import { useForm } from 'react-hook-form'
import { DirectBtn } from 'components'
import { useState } from 'react'
import axios from 'axios'
import {
  Notifications,
  MemberInputs,
  MemberDetails,
  MemberIfo,
} from 'pages/Members/components'

const MemberForm: React.FC<MemberDetails> = (props) => {
  const { details, url, setMembersData, setIsLoading, setSection } = props

  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [statusCode, setStatusCode] = useState(404)

  const navigate = useNavigate()

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm({
    mode: 'all',
    defaultValues: details,
  })
  const submitHandler = async (data: MemberIfo) => {
    const memberDetails = data
    memberDetails.orbitLength = +memberDetails.orbitLength

    try {
      const response = await axios.post(url, memberDetails, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })

      if (response.status === 201) {
        setValue('orbitLength', '')
        setValue('instrument', '')
        setValue('biography', '')
        setValue('color', '')
        setValue('name', '')

        fetchMembersData(() => {}, setMembersData, setIsLoading, 1)
        navigate(`/Dashboard/Members?page=1`)
        setSection('')
        setShowErrorAlert(false)
      }
    } catch (error: any) {
      const statusCode = error.response.status

      setStatusCode(statusCode)

      setShowErrorAlert(true)
    }
  }

  return (
    <div className='animate-fade-in'>
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
        <MemberInputs
          colorValue={watch().color}
          title='დაამატე წევრი'
          register={register}
          errors={errors}
        />
      </form>

      <DirectBtn title='გადი უკან' direction={setSection} goTo='' />
    </div>
  )
}

export default MemberForm
