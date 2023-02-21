import { Navigate, useLocation } from 'react-router-dom'
import type { FC } from 'react'

import { Routes } from '@router/routes.enum'
import { useAuthStore } from '@stores/auth.store'
import type { ChildrenProps } from '@models/children-props'

const RequireAuthRoute: FC<ChildrenProps> = ({ children }) => {
  const location = useLocation()
  const isAuth = useAuthStore(state => state.isAuth())

  if (!isAuth) {
    return <Navigate to={Routes.LOGIN} state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default RequireAuthRoute
