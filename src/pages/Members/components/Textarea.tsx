import { TextareaProps } from 'pages/Members/components'
import { isWordGeorgian } from 'helpers'

const Textarea: React.FC<TextareaProps> = (props) => {
  const { inputName, placeholder, register, errors } = props

  return (
    <div className='flex flex-col justify-center items-center h-[235px]'>
      <textarea
        data-cy={inputName}
        {...register(inputName, {
          required: 'შევსება სავალდებულოა!',

          validate: {
            isWordGeorgian: (v: string) =>
              isWordGeorgian(v, inputName) || 'მხოლოდ ქართული ასოები',

            minLength: (v: string) =>
              v.trim().length >= 1 || 'შევსება სავალდებულოა!',
          },
        })}
        className={`${errors && '!bg-redSm'} px-4 py-4 resize-none bgTextarea`}
        placeholder={placeholder}
      />

      {errors && <p className='text-sm text-red w-[690px]'>{errors.message}</p>}
    </div>
  )
}

export default Textarea
