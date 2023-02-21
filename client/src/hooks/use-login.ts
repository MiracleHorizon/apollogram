import { useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

import { useAuthStore } from '@stores/auth.store'
import type { UserModel } from '@models/user.model'
import type { LoginBody } from '@models/api/auth/login-body'

const LOGIN_MUTATION = gql`
  mutation loginLocal($email: String!, $password: String!) {
    loginLocal(dto: { email: $email, password: $password }) {
      id
      email
      login
      phoneNumber
      avatar
    }
  }
`

export function useLogin() {
  const location = useLocation()
  const navigate = useNavigate()

  const [loginMutation, { data }] = useMutation<MutationResult>(LOGIN_MUTATION)
  const login = useAuthStore(state => state.login)

  const handleRedirectFrom = useCallback(() => {
    if (location?.state?.from) {
      navigate(location.state.from)
    }
  }, [location, navigate])

  const handleSubmit = useCallback(
    (loginBody: LoginBody) => {
      void loginMutation({ variables: loginBody })
    },
    [loginMutation]
  )

  useEffect(() => {
    if (!data) return
    login(data.loginLocal)
    handleRedirectFrom()
  }, [data, login, handleRedirectFrom])

  return { handleSubmit }
}

interface MutationResult {
  loginLocal: UserModel
}
