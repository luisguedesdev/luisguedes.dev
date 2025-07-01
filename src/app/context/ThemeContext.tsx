'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'
type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  setSystemTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    const root = window.document.documentElement
    const initialTheme = (localStorage.getItem('theme') as Theme) || 'system'
    setTheme(initialTheme)
    if (
      initialTheme === 'dark' ||
      (initialTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
      return newTheme
    })
  }

  const setSystemTheme = () => {
    setTheme('system')
    localStorage.setItem('theme', 'system')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
