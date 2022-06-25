import { TextareaProps } from 'pages/Members/components/types'

const Textarea: React.FC<TextareaProps> = (props) => {
  const { inputName, placeholder, register, errors } = props
  return (
    <div className='flex justify-center'>
      <textarea
        {...register(inputName, {
          required: 'შევსება სავალდებულოა!',
        })}
        className={`${errors && '!bg-redSm'} px-4 py-4 resize-none ${
          props.styles
        }`}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Textarea
