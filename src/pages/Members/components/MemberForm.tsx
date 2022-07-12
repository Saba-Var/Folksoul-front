import { MemberDetails, MemberIfo } from 'pages/Members/components/types'
import { Notifications, MemberInputs } from 'pages/Members/components'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { fetchMembersData } from 'helper/index'
import { useForm } from 'react-hook-form'
import { DirectBtn } from 'components'
import { useState } from 'react'
import axios from 'axios'

const MemberForm: React.FC<MemberDetails> = (props) => {
  const { details, url, setMembersData, setIsLoading, action, setSection } =
    props

  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [statusCode, setStatusCode] = useState(404)

  const navigate = useNavigate()
  const [pageParam] = useSearchParams()

  const currentPage = +pageParam.get('page')!
  let fetchPage = currentPage || 1

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: details,
  })

  const submitHandler = (data: MemberIfo) => {
    const memberDetails = data
    memberDetails.orbitLength = +memberDetails.orbitLength

    const fetch = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: url,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
          data: memberDetails,
        })

        if (response.status === 201) {
          setValue('orbitLength', '')
          setValue('instrument', '')
          setValue('biography', '')
          setValue('color', '')
          setValue('name', '')

          fetchMembersData(() => {}, setMembersData, setIsLoading, fetchPage)
          navigate(`/Dashboard/Members?page=${fetchPage}`)

          setShowModal(true)
          setShowErrorAlert(false)
        }
      } catch (error: any) {
        const statusCode = error.response.status

        setStatusCode(statusCode)

        setShowErrorAlert(true)
      }
    }
    fetch()
  }

  return (
    <div className='animate-fade-in'>
      <Notifications
        setShowErrorAlert={setShowErrorAlert}
        showErrorAlert={showErrorAlert}
        setShowModal={setShowModal}
        statusCode={statusCode}
        showModal={showModal}
        action={action}
      />

      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col justify-between'
      >
        <MemberInputs
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
