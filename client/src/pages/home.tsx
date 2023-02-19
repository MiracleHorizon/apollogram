import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Home from '@modules/home'
import { useAuthStore } from '@stores/auth.store'
import { Routes } from '@router/routes.enum'

const HomePage = () => {
  const navigate = useNavigate()
  const isAuth = useAuthStore(state => state.isAuth)

  useEffect(() => {
    if (!isAuth) navigate(Routes.LOGIN)
  }, [isAuth, navigate])

  return <Home />
}

export default HomePage
