'use client'

import { useSearchParams } from 'next/navigation'
import PageWrapper from '@/components/ui/PageWrapper'

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <PageWrapper
      showBackground={true}
      className="flex items-center justify-center py-16"
      style={{ background: 'var(--gradient-hero)', minHeight: 'calc(100vh - 200px)' }}
    >
      <div className="max-w-md w-full mx-4">
        <div className="backdrop-blur-sm p-8 rounded-2xl border shadow-2xl" style={{
          background: 'var(--gradient-card)',
          borderColor: 'var(--color-border-muted)',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Authentication Error
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--color-text-muted)' }}>
              {error || 'An error occurred during authentication'}
            </p>
            <a
              href="/auth/signin"
              className="inline-flex items-center px-6 py-3 rounded-xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--shadow-primary)'
              }}
            >
              Try signing in again
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}