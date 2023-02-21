import AuthLayout from '../layout'
import AuthMain from '../components/auth-main'
import RegisterForm from './register-form'
import { useRegister } from '@hooks/auth/use-register'

const Register = () => {
  const { handleSubmit } = useRegister()

  return (
    <AuthLayout>
      <AuthMain title='Register'>
        <RegisterForm onSubmit={handleSubmit} />
      </AuthMain>
    </AuthLayout>
  )
}

export default Register
