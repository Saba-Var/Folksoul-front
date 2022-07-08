import { LinkInputProps } from 'pages/SocialLinks/components/types'

const LinkInput: React.FC<LinkInputProps> = (props) => {
  const { errors, inputName, placeholder, register } = props

  return (
    <div
      className={`h-24 flex flex-col w-64 ${
        inputName === 'url' && 'w-[498px]'
      } animate-jello-horizontal`}
    >
      <input
        data-cy={inputName}
        {...register(inputName, {
          required: 'შევსება სავალდებულოა!',
          validate: {
            minLength: (v: string) => {
              if (inputName === 'linkName') {
                return v.length >= 2 || 'შეიყვანეთ მინიმუმ 2 სიმბოლო'
              }
            },

            urlFormat: (v: string) => {
              const validUrl =
                /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g

              if (inputName === 'url') {
                return (
                  !!v.match(validUrl) || 'შეიყვანეთ ვალიდური ბმულის მისამართი'
                )
              }
              return true
            },
          },
        })}
        type='text'
        className={`${
          errors && errors.message && 'bg-redSm'
        } number bg-transparent  h-14 border border-darkBlue font-BPG-Arial text-center text-darkBlue rounded-md outline-none text-base tracking-wider member-placeholder  `}
        placeholder={`${placeholder}`}
      />
      {errors && (
        <p className='text-sm text-center text-red'>{errors.message}</p>
      )}
    </div>
  )
}

export default LinkInput
