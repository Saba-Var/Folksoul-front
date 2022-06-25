import { InputFieldProps } from 'components/types'

const InputField: React.FC<InputFieldProps> = (props) => {
  const { inputName, type, placeholder, register, minLength } = props
  return (
    <>
      <input
        {...register(inputName, {
          required: 'შევსება სავალდებულოა!',
          minLength: {
            value: minLength,
            message: `მინიმუმ ${minLength} სიმბოლო`,
          },
        })}
        type={type}
        className={`${props.styles} ${
          props.errors && '!bg-redSm'
        } number bg-transparent h-14 border border-darkBlue font-BPG-Arial text-center text-darkBlue rounded-md outline-none text-base tracking-wider member-placeholder  `}
        placeholder={`${placeholder}`}
      />
    </>
  )
}

export default InputField
