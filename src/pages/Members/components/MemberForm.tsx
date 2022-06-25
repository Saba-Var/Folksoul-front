import { useForm } from 'react-hook-form'
import { InputField, GoBackBtn } from 'components'
import { MemberDetails } from 'pages/Members/components/types'
import { Textarea } from 'pages/Members/components'

const MemberForm: React.FC<MemberDetails> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: props.details,
  })

  const submitHandler = () => {}

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='flex flex-col justify-between h-screen'
    >
      <div>
        <div className='flex justify-center'>
          <InputField
            errors={errors.name}
            styles={'w-64'}
            inputName='name'
            placeholder='სახელი'
            register={register}
            type='text'
            minLength={3}
          />
        </div>
        <div className='flex gap-8 mt-9 justify-center mb-11'>
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
            minLength={3}
          />
        </div>
        <Textarea
          placeholder='ბექა, ბასზე ბასი ადამიანი ...'
          errors={errors.biography}
          inputName='biography'
          register={register}
          styles='bgTextarea'
        />
      </div>
      <div className='flex flex-col  justify-between items-center gap-5'>
        <button type='submit' className='blueBtn w-52'>
          დაამატე წევრი
        </button>
        <GoBackBtn
          title='გადი უკან'
          direction={props.setAddMember}
          goTo={false}
        />
      </div>
    </form>
  )
}

export default MemberForm
