import { User } from '@prisma/client'

export type UserWithoutPrivateData = Omit<
  User,
  'hashedPassword' | 'hashedRefreshToken'
>
