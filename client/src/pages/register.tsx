import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Register from '@modules/auth/register'
import { useDocumentTitle } from '@hooks/use-document-title'
import { useAuthStore } from '@stores/auth.store'
import { APP_NAME } from '@utils/constants'
import { Routes } from '@router/routes.enum'

const RegisterPage = () => {
  const navigate = useNavigate()
  const isAuth = useAuthStore(state => state.isAuth)

  useEffect(() => {
    if (isAuth) navigate(Routes.HOME)
  }, [isAuth, navigate])

  useDocumentTitle(`Register | ${APP_NAME}`)

  return <Register />
}

export default RegisterPage
