import { useCallback, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import Cookies from 'js-cookie'

import { REFRESH_MUTATION } from '@lib/auth.schemas'
import { useAuthStore } from '@stores/auth.store'
import type { UserModel } from '@models/user.model'

export function useRefreshAuth() {
  const [refreshAuthMutation, { data, called, loading, error }] =
    useMutation<MutationResult>(REFRESH_MUTATION)
  const login = useAuthStore(state => state.login)

  const handleUnauthorizedError = useCallback(() => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
  }, [])

  useEffect(() => {
    if (!Cookies.get('refreshToken')) return
    void refreshAuthMutation()
  }, [refreshAuthMutation])

  useEffect(() => {
    if (!data) return
    login(data.refresh)
  }, [data, login])

  useEffect(() => {
    if (!error) return

    if (error.message === 'Unauthorized') {
      handleUnauthorizedError()
    }
  }, [error, handleUnauthorizedError])

  return {
    called,
    loading,
    error
  }
}

interface MutationResult {
  refresh: UserModel
}
