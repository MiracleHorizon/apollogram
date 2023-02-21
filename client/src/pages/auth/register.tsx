import Register from '@modules/auth/register'
import { useDocumentTitle } from '@hooks/use-document-title'
import { APP_NAME } from '@common/utils/constants'

const RegisterPage = () => {
  useDocumentTitle(`Register | ${APP_NAME}`)

  return <Register />
}

export default RegisterPage
