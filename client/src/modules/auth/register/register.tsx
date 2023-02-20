import AuthLayout from '../layout'
import AuthMain from '../components/auth-main'
import RegisterForm from './register-form'
import { useRegister } from '@hooks/use-register'

const Register = () => {
  const { onSubmit } = useRegister()

  return (
    <AuthLayout>
      <AuthMain title='Register'>
        <RegisterForm onSubmit={onSubmit} />
      </AuthMain>
    </AuthLayout>
  )
}

export default Register
