import { useCallback } from 'react'
import { gql, useMutation } from '@apollo/client'

import { useAuthStore } from '@stores/auth.store'
import { apolloClient } from '@lib/apollo-client'

const LOGOUT_MUTATION = gql`
  mutation logout {
    logout
  }
`

export function useLogout() {
  const [logoutMutation] = useMutation(LOGOUT_MUTATION)
  const logout = useAuthStore(state => state.logout)

  return useCallback(() => {
    void logoutMutation().then(() => {
      void apolloClient.resetStore()
      logout()
    })
  }, [logout, logoutMutation])
}
