import type { FC } from 'react'

import type { ChildrenProps } from '@models/children-props'

const AuthLayout: FC<ChildrenProps> = ({ children }) => (
  <div className='w-screen h-screen px-[24px] bg-[linear-gradient(135deg,#d0e,#91f)]'>
    {children}
  </div>
)

export default AuthLayout
