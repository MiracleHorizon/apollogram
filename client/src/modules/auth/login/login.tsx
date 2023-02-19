import { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import AuthLayout from '../layout'
import AuthMain from '../components/auth-main'
import LoginForm from './login-form'
import { LOGIN_MUTATION } from '@lib/auth.schemas'
import { useAuthStore } from '@stores/auth.store'
import type { UserModel } from '@models/user.model'
import type { LoginBody } from '@models/api/auth/login-body'

const Login = () => {
  const [loginMutation, { data }] = useMutation<MutationResult>(LOGIN_MUTATION)
  const login = useAuthStore(state => state.login)

  function onSubmit(loginBody: LoginBody) {
    void loginMutation({
      variables: loginBody
    })
  }

  useEffect(() => {
    if (!data) return
    login(data.loginLocal)
  }, [data, login])

  return (
    <AuthLayout>
      <AuthMain title='Login'>
        <LoginForm onSubmit={onSubmit} />
      </AuthMain>
    </AuthLayout>
  )
}

export default Login

interface MutationResult {
  loginLocal: UserModel
}
