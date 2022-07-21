import { DirectBtn, ErrorAlert } from 'components'
import { useNavigate } from 'react-router-dom'
import { addMemberToBand } from 'services'
import { fetchMembersData } from 'helpers'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  MemberDetails,
  MemberInputs,
  MemberIfo,
} from 'pages/Members/components'

const MemberForm: React.FC<MemberDetails> = (props) => {
  const { details, setMembersData, setIsLoading, setSection } = props

  const [showErrorAlert, setShowErrorAlert] = useState(false)

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
      const { status } = await addMemberToBand(
        memberDetails,
        localStorage.getItem('token')!
      )

      if (status === 201) {
        setValue('orbitLength', 0)
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
      setStatusCode(error.response.status)
      setShowErrorAlert(true)
    }
  }

  return (
    <div className='animate-fade-in'>
      {showErrorAlert && (
        <ErrorAlert
          styles='left-[53.5%] top-[5%] 4xl:left-[53.9%] 6xl:left-[54.5%]'
          title={
            statusCode === 409
              ? `'${watch().name}' უკვე ბენდშია`
              : 'ინფორმაცია ვერ მოიძებნა!'
          }
          setShowAlert={setShowErrorAlert}
        />
      )}

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
