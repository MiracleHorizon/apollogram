import { useEffect } from 'react'

import { useThemeStore } from '@theme/theme.store'
import { Theme } from '@theme/theme.enum'

export function useTheme() {
  const theme = useThemeStore(state => state.theme)

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark')
    }

    if (theme === Theme.LIGHT) {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
}
