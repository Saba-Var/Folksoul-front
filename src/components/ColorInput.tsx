import { ColorInputProps } from 'components'

const ColorInput: React.FC<ColorInputProps> = (props) => {
  const { register, errors, colorValue } = props

  return (
    <div className={`flex flex-col w-48 !h-[115px] relative`}>
      {!colorValue && (
        <div
          className={`${
            errors && '!bg-redSm'
          } absolute number bg-transparent  h-[57px]  w-48 border text-sm border-darkBlue font-BPG-Arial text-center flex justify-center items-center rounded-[10px] outline-none tracking-wider text-mdGray `}
        >
          ფერი
        </div>
      )}

      <input
        data-cy='color'
        {...register('color', {
          required: 'შევსება სავალდებულოა!',
        })}
        className={`border-darkBlue color rounded-[10px] h-[58px] ${
          !colorValue && 'opacity-0'
        }`}
        placeholder='ფერი'
        defaultValue={'#FBFBFB'}
        type='color'
      />
      {errors && <p className='text-sm text-red'>{errors.message}</p>}
    </div>
  )
}

export default ColorInput
