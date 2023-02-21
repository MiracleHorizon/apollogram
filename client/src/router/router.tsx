import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from '@pages/home'
import RegisterPage from '@pages/auth/register'
import LoginPage from '@pages/auth/login'
import NotFoundPage from '@pages/404'

import RequireAuthRoute from '@hoc/require-auth-route'
import NotAuthRoute from '@hoc/not-auth-route'

import { Routes } from './routes.enum'

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: (
      <RequireAuthRoute>
        <HomePage />
      </RequireAuthRoute>
    )
  },
  {
    path: Routes.REGISTER,
    element: (
      <NotAuthRoute>
        <RegisterPage />
      </NotAuthRoute>
    )
  },
  {
    path: Routes.LOGIN,
    element: (
      <NotAuthRoute>
        <LoginPage />
      </NotAuthRoute>
    )
  },
  { path: Routes.NOT_FOUND, element: <NotFoundPage /> }
])

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
