import { useCallback } from 'react'
import { useMutation } from '@apollo/client'

import { apolloClient } from '@lib/apollo-client'
import { LOGOUT_MUTATION } from '@lib/auth.schemas'
import { useAuthStore } from '@stores/auth.store'

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
