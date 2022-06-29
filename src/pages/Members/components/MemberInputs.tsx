import { InputsProps } from 'pages/Members/components/types'
import { Textarea } from 'pages/Members/components'
import { InputField } from 'components'

const MemberInputs: React.FC<InputsProps> = (props) => {
  const { errors, register } = props
  return (
    <>
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
        className='blueBtn animate-tracking-in-expand transition-transform hover:scale-105 w-52 block mx-auto mt-[10%] 3xl:mt-[4%] 4xl:mt-[9%] 5xl:mt-[13%] mb-2'
      >
        {props.title}
      </button>
    </>
  )
}

export default MemberInputs
