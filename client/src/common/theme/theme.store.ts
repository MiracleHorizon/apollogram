import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Theme } from './theme.enum'

interface ThemeStore {
  theme: Theme
  setLightTheme: () => void
  setDarkTheme: () => void
}

const LOCAL_STORAGE_KEY = 'theme'

export const useThemeStore = create(
  persist<ThemeStore>(
    set => ({
      theme: (localStorage.getItem(LOCAL_STORAGE_KEY) as Theme) ?? Theme.LIGHT,

      setLightTheme: () => set({ theme: Theme.LIGHT }),
      setDarkTheme: () => set({ theme: Theme.DARK })
    }),
    {
      name: LOCAL_STORAGE_KEY
    }
  )
)
