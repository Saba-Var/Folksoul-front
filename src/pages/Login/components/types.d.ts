export type InputFieldProps = {
  register: UseFormRegister<FieldValues>
  placeholder: string
  showError: boolean
  type: string
  errors: any
}

export type UserData = {
  username: string
  password: string
}
