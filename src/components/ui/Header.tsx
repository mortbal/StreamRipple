'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="backdrop-blur-sm border-b sticky top-0 z-50" style={{
      backgroundColor: 'var(--color-card)',
      borderColor: 'var(--color-border-primary)',
      boxShadow: 'var(--shadow-card)'
    }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg" style={{ background: 'var(--gradient-primary)' }}></div>
            <span className="text-2xl font-bold bg-clip-text text-transparent" style={{
              backgroundImage: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              StreamRipple
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium transition-colors hover:scale-105 transform duration-200"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              Home
            </Link>
            {session && (
              <>
                <Link
                  href="/dashboard"
                  className="font-medium transition-colors hover:scale-105 transform duration-200"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  Dashboard
                </Link>
                <Link
                  href="/stream"
                  className="font-medium transition-colors hover:scale-105 transform duration-200"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  Stream
                </Link>
              </>
            )}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium hidden sm:block" style={{ color: 'var(--color-text-muted)' }}>
                  {session.user?.name || session.user?.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'var(--gradient-primary)',
                    boxShadow: 'var(--shadow-primary)'
                  }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/auth/signin"
                className="px-6 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: 'var(--shadow-primary)'
                }}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}