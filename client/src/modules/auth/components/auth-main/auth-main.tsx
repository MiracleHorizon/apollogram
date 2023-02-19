import type { FC } from 'react'

import type { ChildrenProps } from '@models/children-props'

const AuthMain: FC<Props> = ({ children, title }) => (
  <main className='w-full h-full flex flex-col items-center justify-center'>
    <header className='mb-[8px]'>
      <h1 className='text-white text-[26px] uppercase'>{title}</h1>
    </header>
    {children}
  </main>
)

export default AuthMain

interface Props extends ChildrenProps {
  title: string
}
