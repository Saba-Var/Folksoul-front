import { InputFieldProps } from 'pages/Login/components/types'

const InputField: React.FC<InputFieldProps> = (props) => {
  const inputName = props.placeholder === 'მეტსახელი' ? 'Username' : 'Password'

  return (
    <>
      <input
        {...props.register(inputName, {
          required: 'ამ ველის შევსება სავალდებულოა',
        })}
        type={props.type}
        className='border-none placeholder outline-none rounded-[2px]  h-12 px-5 bg-lightBrown w-128 '
        placeholder={props.placeholder}
      />
    </>
  )
}

export default InputField
