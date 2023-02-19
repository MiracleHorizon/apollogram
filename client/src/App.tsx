import AppRouter from './router'
import AuthError from '@components/auth-error'
import OvalLoader from '@ui/oval-loader'
import { useRefreshAuth } from '@hooks/use-refresh-auth'

const App = () => {
  const { loading, error } = useRefreshAuth()

  if (loading) {
    return (
      <div className='w-screen h-screen'>
        <OvalLoader />
      </div>
    )
  }

  if (error) {
    return <AuthError />
  }

  return <AppRouter />
}

export default App
