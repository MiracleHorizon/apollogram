import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email(),
  login: z.string().min(4).max(24),
  avatar: z.string().optional(),
  createdAt: z.date()
})

export type UserModel = z.infer<typeof UserSchema>
