import { InputFieldProps } from 'pages/Login/components'

const InputField: React.FC<InputFieldProps> = (props) => {
  const { placeholder, errors, register, type, showError, inputName } = props

  const showInputError = errors && showError

  return (
    <div className='h-14'>
      <input
        data-cy={placeholder}
        {...register(inputName, {
          required: 'ამ ველის შევსება სავალდებულოა!',

          validate: {
            minLength: (v: string) => {
              return v.trim().length >= 3 || 'შეიყვანეთ მინიმუმ 3 სიმბოლო!'
            },

            lowerCase: (v: string) => {
              for (let i = 0; i < v.length; i++) {
                if (v[i] === v[i].toUpperCase() && inputName === 'username') {
                  return 'შეიყვანეთ მხოლოდ დაბალი რეგისტრის სიმბოლოები!'
                }
              }
            },
          },
        })}
        type={type}
        className={`text-black border-[2px] border-transparent placeholder outline-none rounded-[2px]  h-12 px-5 bg-lightBrown w-128 ${
          showInputError && 'border-[2px] border-red '
        }`}
        placeholder={placeholder}
      />

      {showInputError && (
        <p data-cy={errors.message} className='text-sm text-red'>
          {errors.message}
        </p>
      )}
    </div>
  )
}

export default InputField
