'use client'

import { createContext, useContext } from 'react'

interface BackgroundContextType {
  showBackground: boolean
  backgroundStyle?: 'default' | 'signin' | 'minimal'
}

const BackgroundContext = createContext<BackgroundContextType>({
  showBackground: true,
  backgroundStyle: 'default'
})

export function BackgroundProvider({
  children,
  showBackground = true,
  backgroundStyle = 'default'
}: {
  children: React.ReactNode
  showBackground?: boolean
  backgroundStyle?: 'default' | 'signin' | 'minimal'
}) {
  return (
    <BackgroundContext.Provider value={{ showBackground, backgroundStyle }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export function useBackground() {
  return useContext(BackgroundContext)
}

export function BackgroundElements() {
  const { showBackground, backgroundStyle } = useBackground()

  if (!showBackground) return null

  // For now, just return an empty container for future background elements
  // No circles, but keeps the infrastructure for other background effects
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background elements can be added here in the future */}
    </div>
  )
}