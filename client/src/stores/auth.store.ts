import { create } from 'zustand'

import type { UserModel } from '@models/user.model'

interface AuthStore {
  isAuth: boolean
  user: UserModel | null
  login: (user: UserModel) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>(setState => ({
  isAuth: false,
  user: null,

  login: (user: UserModel) => setState(() => ({
    user,
    isAuth: true
  })),
  logout: () => setState(() => ({
    user: null,
    isAuth: false
  }))
}))
