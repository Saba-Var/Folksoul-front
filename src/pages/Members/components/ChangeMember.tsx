import { MemberInputProps, MemberInputs } from 'pages/Members/components'
import { changeBandMember, getOneMemberData } from 'services'
import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DirectBtn, ErrorAlert } from 'components'
import { fetchMembersData } from 'helpers'
import { useForm } from 'react-hook-form'

const ChangeMember: React.FC<MemberInputProps> = (props) => {
  const { setMembersData, setIsLoading, id, setSection } = props

  const [statusCode, setStatusCode] = useState(404)
  const [page] = useSearchParams()

  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)

  const [colorValue, setColorValue] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      orbitLength: 0,
      instrument: '',
      biography: '',
      color: '',
      name: '',
    },
  })

  const fetchOneMember = useCallback(async () => {
    try {
      const response = await getOneMemberData(
        id,
        localStorage.getItem('token')!
      )

      if (response.status === 200) {
        const data = response.data
        setValue('orbitLength', +data.orbitLength)
        setValue('instrument', data.instrument)
        setValue('biography', data.biography)
        setValue('color', data.color)
        setValue('name', data.name)

        setColorValue(data.color)
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
        orbitLength,
        instrument,
        biography,
        color,
        name,
        id,
      }

      const { status } = await changeBandMember(
        data,
        localStorage.getItem('token')!
      )

      if (status === 200) {
        fetchMembersData(
          setErrorAlert,
          setMembersData,
          setIsLoading,
          +page.get('page')!
        )

        setSection('')
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

      {showErrorAlert && (
        <ErrorAlert
          setShowAlert={setShowErrorAlert}
          title={`${
            statusCode === 409 ? 'წევრი უკვე ბენდშია' : 'წევრი ვერ მოიძებნა'
          }`}
          styles={
            'top-[6%] left-[55%] 3xl:left-[53%] 3xl:top-[5.5%] 4xl:left-[54%] 5xl:left-[54.5%] 5xl:top-[6%]'
          }
        />
      )}

      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col justify-between'
      >
        <MemberInputs
          colorValue={colorValue}
          errors={errors}
          register={register}
          title='შეცვლა'
        />
      </form>

      <DirectBtn title='გადი უკან' direction={setSection} goTo='' />
    </div>
  )
}

export default ChangeMember
