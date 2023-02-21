import { Navigate } from 'react-router-dom'
import type { FC } from 'react'

import { useAuthStore } from '@stores/auth.store'
import { Routes } from '@router/routes.enum'
import type { ChildrenProps } from '@models/children-props'

const NotAuthRoute: FC<ChildrenProps> = ({ children }) => {
  const isAuth = useAuthStore(state => state.isAuth())

  if (isAuth) {
    return <Navigate to={Routes.HOME} replace />
  }

  return <>{children}</>
}

export default NotAuthRoute
