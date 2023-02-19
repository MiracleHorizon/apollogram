import { useForm } from 'react-hook-form'
import type { FC } from 'react'

import AuthForm from '@modules/auth/components/auth-form'
import AccountLabel from '@modules/auth/components/account-label'
import { Routes } from '@router/routes.enum'
import type { LoginBody } from '@models/api/auth/login-body'

const formFields = [
  { name: 'email', type: 'email', placeholder: 'Enter your email' },
  { name: 'password', type: 'password', placeholder: 'Enter your password' }
]

const LoginForm: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <AuthForm
      formFields={formFields}
      register={register}
      onSubmit={handleSubmit(onSubmit)}
    >
      <AccountLabel
        text='Don`t have an account? Register.'
        href={Routes.REGISTER}
      />
    </AuthForm>
  )
}

export default LoginForm

interface Props {
  onSubmit: (loginBody: LoginBody) => void
}
