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
            placeholder='სახელი'
            register={register}
            inputName='name'
            minLength={3}
            type='text'
          />
        </div>

        <div className='flex gap-8 justify-center'>
          <InputField
            errors={errors.instrument}
            placeholder='ინსტრუმენტი'
            inputName='instrument'
            register={register}
            minLength={2}
            type='text'
          />

          <InputField
            errors={errors.orbitLength}
            placeholder='ორბიტის სიგანე'
            inputName='orbitLength'
            register={register}
            type='number'
          />

          <InputField
            errors={errors.color}
            register={register}
            placeholder='ფერი'
            inputName='color'
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
        data-TestId={props.title}
        className='blueBtn animate-tracking-in-expand transition-transform hover:scale-105 w-52 block mx-auto mt-[10%] 3xl:mt-[4%] 4xl:mt-[9%] 5xl:mt-[13%] mb-2'
        type='submit'
      >
        {props.title}
      </button>
    </>
  )
}

export default MemberInputs
