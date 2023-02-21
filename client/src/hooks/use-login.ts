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

  const handleLocationState = useCallback(() => {
    if ('from' in location.state) {
      navigate(location.state.from)
    }
  }, [location, navigate])

  const onSubmit = useCallback(
    (loginBody: LoginBody) => {
      void loginMutation({ variables: loginBody }).then(() => {
        handleLocationState()
      })
    },
    [loginMutation, handleLocationState]
  )

  useEffect(() => {
    if (!data) return
    login(data.loginLocal)
  }, [data, login])

  return { onSubmit }
}

interface MutationResult {
  loginLocal: UserModel
}
