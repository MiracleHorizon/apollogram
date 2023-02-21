import { useCallback, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'

import { useAuthStore } from '@stores/auth.store'
import type { UserModel } from '@models/user.model'
import type { RegisterBody } from '@models/api/auth/register-body'

const REGISTER_MUTATION = gql`
  mutation registerLocal(
    $password: String!
    $email: String!
    $login: String!
    $phoneNumber: String!
  ) {
    registerLocal(
      dto: {
        password: $password
        email: $email
        login: $login
        phoneNumber: $phoneNumber
      }
    ) {
      id
      email
      login
      phoneNumber
      avatar
    }
  }
`

export function useRegister() {
  const [registerMutation, { data }] =
    useMutation<MutationResult>(REGISTER_MUTATION)
  const login = useAuthStore(state => state.login)

  const handleSubmit = useCallback(
    (registerBody: RegisterBody) => {
      void registerMutation({ variables: registerBody })
    },
    [registerMutation]
  )

  useEffect(() => {
    if (!data) return
    login(data.registerLocal)
  }, [data, login])

  return { handleSubmit }
}

interface MutationResult {
  registerLocal: UserModel
}
