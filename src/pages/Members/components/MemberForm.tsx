import { MemberDetails, MemberIfo } from 'pages/Members/components/types'
import { Textarea } from 'pages/Members/components'
import { InputField, GoBackBtn } from 'components'
import { useSearchParams } from 'react-router-dom'
import { fetchMembersData } from 'helper/index'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const MemberForm: React.FC<MemberDetails> = (props) => {
  const navigate = useNavigate()
  const [pageParam] = useSearchParams()
  const currentPage = +pageParam.get('page')!
  let fetchPage = currentPage
  if (props.membersData.length === 3) fetchPage = currentPage + 1

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: props.details,
  })

  const submitHandler = (data: MemberIfo) => {
    const memberDetails = data
    memberDetails.orbitLength = +memberDetails.orbitLength

    const fetch = async () => {
      axios({
        method: 'post',
        url: props.url,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        data: memberDetails,
      })
        .then((res) => {
          if (res.status === 201) {
            setValue('name', '')
            setValue('biography', '')
            setValue('color', '')
            setValue('orbitLength', '')
            setValue('instrument', '')
            fetchMembersData(
              props.setMembersData,
              props.setIsLoading,
              fetchPage
            )
            navigate(`/Dashboard/Members?page=${fetchPage}`)
          }
        })
        .catch((err) => {
          setError('name', {
            type: 'costum',
            message: `'${memberDetails.name}' უკვე ბენდშია`,
          })
        })
    }
    fetch()
  }

  return (
    <div>
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
          დაამატე წევრი
        </button>
      </form>
      <GoBackBtn
        title='გადი უკან'
        direction={props.setAddMember}
        goTo={false}
      />
    </div>
  )
}

export default MemberForm
