import { UseFormRegister } from 'react-hook-form'

export type InputFieldProps = {
  register: UseFormRegister<{ username: string; password: string }>
  inputName: 'username' | 'password'
  errors: FieldError | undefined
  placeholder: string
  showError: boolean
  type: string
}

export type UserData = {
  username: string
  password: string
}
