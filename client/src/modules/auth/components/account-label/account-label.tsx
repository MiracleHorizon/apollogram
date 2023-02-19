import { Link } from 'react-router-dom'
import type { FC } from 'react'

import type { Routes } from '@router/routes.enum'

const AccountLabel: FC<Props> = ({ href, text }) => (
  <Link
    to={href}
    className='self-end text-white text-right text-[16px] hover:underline cursor-pointer'
  >
    {text}
  </Link>
)

export default AccountLabel

interface Props {
  text: string
  href: Routes
}
