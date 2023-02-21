import Login from '@modules/auth/login'
import { useDocumentTitle } from '@hooks/use-document-title'
import { APP_NAME } from '@common/utils/constants'

const LoginPage = () => {
  useDocumentTitle(`Login | ${APP_NAME}`)

  return <Login />
}

export default LoginPage
