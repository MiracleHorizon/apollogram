import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Login from '@modules/auth/login'
import { useDocumentTitle } from '@hooks/use-document-title'
import { useAuthStore } from '@stores/auth.store'
import { APP_NAME } from '@utils/constants'
import { Routes } from '@router/routes.enum'

const LoginPage = () => {
  const navigate = useNavigate()
  const isAuth = useAuthStore(state => state.isAuth)

  useEffect(() => {
    if (isAuth) navigate(Routes.HOME)
  }, [isAuth, navigate])

  useDocumentTitle(`Login | ${APP_NAME}`)

  return <Login />
}

export default LoginPage
