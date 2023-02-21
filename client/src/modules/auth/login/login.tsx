import AuthLayout from '../layout'
import AuthMain from '../components/auth-main'
import LoginForm from './login-form'
import { useLogin } from '@hooks/auth/use-login'

const Login = () => {
  const { handleSubmit } = useLogin()

  return (
    <AuthLayout>
      <AuthMain title='Login'>
        <LoginForm onSubmit={handleSubmit} />
      </AuthMain>
    </AuthLayout>
  )
}

export default Login
