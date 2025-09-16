'use client'

import { BackgroundProvider } from '@/lib/background'

interface PageWrapperProps {
  children: React.ReactNode
  showBackground?: boolean
  backgroundStyle?: 'default' | 'signin' | 'minimal'
  className?: string
  style?: React.CSSProperties
}

export default function PageWrapper({
  children,
  showBackground = true,
  backgroundStyle = 'default',
  className = '',
  style = {}
}: PageWrapperProps) {
  return (
    <BackgroundProvider showBackground={showBackground} backgroundStyle={backgroundStyle}>
      <div className={className} style={style}>
        {children}
      </div>
    </BackgroundProvider>
  )
}