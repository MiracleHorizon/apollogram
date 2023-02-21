import AppRouter from './router'
import OvalLoader from '@ui/oval-loader'
import { useRefreshAuth } from '@hooks/auth/use-refresh-auth'

const App = () => {
  const { loading } = useRefreshAuth()

  if (loading) {
    return (
      <div className='w-screen h-screen'>
        <OvalLoader />
      </div>
    )
  }

  return <AppRouter />
}

export default App
