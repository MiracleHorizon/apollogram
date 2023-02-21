import { create } from 'zustand'

import type { UserModel } from '@models/user.model'

interface AuthStore {
  user: UserModel | null
  isAuth: () => boolean
  login: (user: UserModel) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,

  isAuth: () => Boolean(get().user),

  login: (user: UserModel) => set({ user }),
  logout: () => set({ user: null })
}))
