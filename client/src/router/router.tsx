import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from '@pages/home'
import RegisterPage from '@pages/register'
import LoginPage from '@pages/login'
import NotFoundPage from '@pages/404'
import { Routes } from '@router/routes.enum'

const router = createBrowserRouter([
  { path: Routes.HOME, element: <HomePage /> },
  { path: Routes.REGISTER, element: <RegisterPage /> },
  { path: Routes.LOGIN, element: <LoginPage /> },
  { path: Routes.NOT_FOUND, element: <NotFoundPage /> }
])

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
