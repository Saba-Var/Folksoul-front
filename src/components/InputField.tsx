import { InputFieldProps } from 'components/types'
import { georgianLan } from 'helper/index'

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
            georgianLan: (v: string) => {
              if (inputName !== 'color' && inputName !== 'orbitLength')
                return georgianLan(v, inputName) || 'მხოლოდ ქართული ასოები'
            },

            minLength: (v: string) => {
              if (
                minLength &&
                inputName !== 'color' &&
                inputName !== 'orbitLength'
              )
                return (
                  v.trim().length >= minLength || `მინიმუმ ${minLength} სიმბოლო`
                )
            },

            hexFormat: (v: string) => {
              if (inputName === 'color') {
                if (v.trim()[0] !== '#') return "ფერი უნდაი წყებოდეს '#'-ით"
                if (v.trim().length !== 7) return 'ფერი უნდა იყოს 7 სიმბოლო'
                if (!/^[A-Z-0-9]*$/.test(v.trim().substring(1)))
                  return 'მიუთითეთ მაღალი რეგისტრის ლათინური ასოები და რიცხვები'
              }
            },
          },
        })}
        type={type}
        className={`${
          errors && '!bg-redSm'
        } number bg-transparent h-14 border border-darkBlue font-BPG-Arial text-center text-darkBlue rounded-md outline-none text-base tracking-wider member-placeholder  `}
        placeholder={`${placeholder}`}
      />
      {errors && <p className='text-sm text-red'>{errors.message}</p>}
    </div>
  )
}

export default InputField
