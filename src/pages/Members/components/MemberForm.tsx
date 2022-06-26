import { MemberDetails, MemberIfo } from 'pages/Members/components/types'
import { Notifications, MemberInputs } from 'pages/Members/components'
import { useSearchParams } from 'react-router-dom'
import { fetchMembersData } from 'helper/index'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { GoBackBtn } from 'components'
import { useState } from 'react'
import axios from 'axios'

const MemberForm: React.FC<MemberDetails> = (props) => {
  const { membersData, details, url, setMembersData, setIsLoading } = props
  const [showModal, setShowModal] = useState(false)
  const [statusCode, setStatusCode] = useState(404)
  const [showErrorAlert, setShowErrorAlert] = useState(false)

  const navigate = useNavigate()
  const [pageParam] = useSearchParams()
  const currentPage = +pageParam.get('page')!
  let fetchPage = currentPage
  if (membersData.length === 3) fetchPage = currentPage + 1

  const {
    register,
    handleSubmit,
    setValue,
    setError,
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
          setValue('name', '')
          setValue('biography', '')
          setValue('color', '')
          setValue('orbitLength', '')
          setValue('instrument', '')
          fetchMembersData(setMembersData, setIsLoading, fetchPage)
          navigate(`/Dashboard/Members?page=${fetchPage}`)
          setShowModal(true)
          setShowErrorAlert(false)
        }
      } catch (error: any) {
        setError('name', {
          type: 'costum',
        })
        setShowErrorAlert(true)
        const statusCode = error.response.status
        if (statusCode === 409) setStatusCode(409)
        if (statusCode === 404) setStatusCode(404)
      }
    }
    fetch()
  }

  return (
    <div>
      <Notifications
        action={props.action}
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
        <MemberInputs
          errors={errors}
          register={register}
          title='დაამატე წევრი'
        />
      </form>
      <GoBackBtn title='გადი უკან' direction={props.setSection} goTo={''} />
    </div>
  )
}

export default MemberForm
