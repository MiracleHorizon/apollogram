import type { FC } from 'react'
import { Roboto } from '@next/font/google'

import type { ChildrenProps } from '@models/children-props'
import './styles/globals.css'

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '700']
})

const RootLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

export default RootLayout
