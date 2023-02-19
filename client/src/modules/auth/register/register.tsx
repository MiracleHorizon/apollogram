import { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import AuthLayout from '../layout'
import AuthMain from '../components/auth-main'
import RegisterForm from './register-form'
import { REGISTER_MUTATION } from '@lib/auth.schemas'
import { useAuthStore } from '@stores/auth.store'
import type { UserModel } from '@models/user.model'
import type { RegisterBody } from '@models/api/auth/register-body'

const Register = () => {
  const [registerMutation, { data }] =
    useMutation<MutationResult>(REGISTER_MUTATION)
  const login = useAuthStore(state => state.login)

  function onSubmit(registerBody: RegisterBody) {
    void registerMutation({
      variables: registerBody
    })
  }

  useEffect(() => {
    if (!data) return
    login(data.registerLocal)
  }, [data, login])

  return (
    <AuthLayout>
      <AuthMain title='Register'>
        <RegisterForm onSubmit={onSubmit} />
      </AuthMain>
    </AuthLayout>
  )
}

export default Register

interface MutationResult {
  registerLocal: UserModel
}
