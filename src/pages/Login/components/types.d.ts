import { UseFormRegister } from 'react-hook-form'

export type InputFieldProps = {
  register: UseFormRegister<{ username: string; password: string }>
  placeholder: string
  showError: boolean
  type: string
  errors: any
}

export type UserData = {
  username: string
  password: string
}
