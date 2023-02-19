import { useForm } from 'react-hook-form'
import type { FC } from 'react'

import AuthForm from '@modules/auth/components/auth-form'
import AccountLabel from '@modules/auth/components/account-label'
import { Routes } from '@router/routes.enum'
import type { FormField } from '@models/forms/form-field'
import type { RegisterBody } from '@models/api/auth/register-body'

const formFields: FormField[] = [
  {
    name: 'login',
    type: 'text',
    placeholder: 'Enter login',
    validation: {
      minLength: 4,
      maxLength: 24
    }
  },
  { name: 'email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', type: 'password', placeholder: 'Enter password' },
  { name: 'passwordRepeat', type: 'password', placeholder: 'Repeat password' },
  { name: 'phoneNumber', type: 'tel', placeholder: 'Enter your phone number' }
]

const RegisterForm: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      login: '',
      email: '',
      password: '',
      passwordRepeat: '',
      phoneNumber: ''
    }
  })

  return (
    <AuthForm
      formFields={formFields}
      register={register}
      onSubmit={handleSubmit(onSubmit)}
    >
      <AccountLabel
        text='Already have an account? Login.'
        href={Routes.LOGIN}
      />
    </AuthForm>
  )
}

export default RegisterForm

interface Props {
  onSubmit: (registerBody: RegisterBody) => void
}
