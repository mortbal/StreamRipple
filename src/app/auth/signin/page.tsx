'use client'

import { signIn, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'
import PageWrapper from '@/components/ui/PageWrapper'

export default function SignIn() {
  const [providers, setProviders] = useState<any>(null)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    setAuthProviders()
  }, [])

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await signIn('credentials', {
        username: credentials.username,
        password: credentials.password,
        callbackUrl: '/dashboard',
      })
    } catch (error) {
      console.error('Sign in error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!providers) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <PageWrapper
      showBackground={true}
      className="relative overflow-hidden flex items-center justify-center py-16"
      style={{ background: 'var(--gradient-hero)', minHeight: 'calc(100vh - 200px)' }}
    >
      <div className="w-full max-w-md mx-4">
        <div className="backdrop-blur-sm p-8 rounded-2xl border shadow-2xl" style={{
          background: 'var(--gradient-card)',
          borderColor: 'var(--color-border-muted)',
          boxShadow: 'var(--shadow-card)'
        }}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent" style={{
              backgroundImage: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Welcome Back
            </h1>
            <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
              Sign in to StreamRipple
            </p>
            <div className="mt-4 h-1 w-20 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }}></div>
          </div>

          <div className="space-y-6">
            {/* Username/Password Form */}
            <form onSubmit={handleCredentialsSignIn} className="space-y-5">
              <div className="space-y-1">
                <label htmlFor="username" className="block text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  Username or Email
                </label>
                <input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--color-secondary)',
                    borderColor: 'var(--color-border-primary)',
                    color: 'var(--color-text-primary)',
                    border: '2px solid transparent',
                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-accent-primary)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  placeholder="demo@streamripple.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--color-secondary)',
                    borderColor: 'var(--color-border-primary)',
                    color: 'var(--color-text-primary)',
                    border: '2px solid transparent',
                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-accent-primary)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-xl text-lg font-bold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                style={{
                  background: isLoading ? 'var(--color-text-subtle)' : 'var(--gradient-primary)',
                  boxShadow: isLoading ? 'none' : 'var(--shadow-primary)',
                  border: 'none'
                }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Sign In
                  </span>
                )}
              </button>
            </form>

            {/* Demo credentials hint */}
            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'var(--color-secondary)', border: '1px solid var(--color-border-muted)' }}>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <strong>Demo:</strong> Use <code className="px-1 py-0.5 rounded text-xs" style={{ backgroundColor: 'var(--color-hover)' }}>demo</code> / <code className="px-1 py-0.5 rounded text-xs" style={{ backgroundColor: 'var(--color-hover)' }}>demo</code>
              </p>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t opacity-30" style={{ borderColor: 'var(--color-border-primary)' }} />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 py-1 text-sm rounded-full" style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-text-subtle)',
                  border: '1px solid var(--color-border-muted)'
                }}>
                  Or continue with
                </span>
              </div>
            </div>

            {/* OAuth Providers */}
            <div className="space-y-3">
              {Object.values(providers)
                .filter((provider: any) => provider.id !== 'credentials')
                .map((provider: any) => (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id, { callbackUrl: '/dashboard' })}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                    style={{
                      backgroundColor: 'var(--color-secondary)',
                      borderColor: 'var(--color-border-primary)',
                      color: 'var(--color-text-primary)',
                      border: '2px solid var(--color-border-muted)',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-hover)'
                      e.currentTarget.style.borderColor = 'var(--color-accent-primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-secondary)'
                      e.currentTarget.style.borderColor = 'var(--color-border-muted)'
                    }}
                  >
                    Sign in with {provider.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}