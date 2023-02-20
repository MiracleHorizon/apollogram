import AuthLayout from '../layout'
import AuthMain from '../components/auth-main'
import LoginForm from './login-form'
import { useLogin } from '@hooks/use-login'

const Login = () => {
  const { onSubmit } = useLogin()

  return (
    <AuthLayout>
      <AuthMain title='Login'>
        <LoginForm onSubmit={onSubmit} />
      </AuthMain>
    </AuthLayout>
  )
}

export default Login
