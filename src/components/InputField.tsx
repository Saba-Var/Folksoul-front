import { InputFieldProps } from 'components'
import { isWordGeorgian } from 'helpers'

const InputField: React.FC<InputFieldProps> = (props) => {
  const { inputName, type, placeholder, register, minLength, errors } = props

  return (
    <div
      className={`h-24 flex flex-col w-48 ${inputName === 'name' && '!w-64'} ${
        inputName === 'color' && 'h-[115px]'
      }`}
    >
      <input
        data-cy={inputName}
        {...register(inputName, {
          required: 'შევსება სავალდებულოა!',
          validate: {
            isWordGeorgian: (v: string) => {
              if (inputName !== 'color' && inputName !== 'orbitLength') {
                return isWordGeorgian(v, inputName) || 'მხოლოდ ქართული ასოები'
              }
            },

            minLength: (v: string) => {
              if (
                minLength &&
                inputName !== 'color' &&
                inputName !== 'orbitLength'
              ) {
                return (
                  v.trim().length >= minLength || `მინიმუმ ${minLength} სიმბოლო`
                )
              }
            },
          },
        })}
        className={`${
          errors && '!bg-redSm'
        } number bg-transparent h-14 border border-darkBlue font-BPG-Arial text-center text-darkBlue rounded-md outline-none text-base tracking-wider member-placeholder  `}
        placeholder={`${placeholder}`}
        type={type}
      />

      {errors && (
        <p data-cy={errors.message} className='text-sm text-red'>
          {errors.message}
        </p>
      )}
    </div>
  )
}

export default InputField
