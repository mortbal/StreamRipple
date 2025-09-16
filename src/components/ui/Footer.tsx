'use client'

import { useTheme } from '@/lib/theme'
import Link from 'next/link'

export default function Footer() {
  const { theme, toggleTheme } = useTheme()

  return (
    <footer className="border-t" style={{
      backgroundColor: 'var(--color-card)',
      borderColor: 'var(--color-border-primary)'
    }}>
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded" style={{ background: 'var(--gradient-primary)' }}></div>
              <span className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
                StreamRipple
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Connect your Unreal Engine applications to the web with pixel-perfect streaming quality.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-primary)' }}>
              Product
            </h3>
            <div className="space-y-2">
              <Link
                href="/dashboard"
                className="block text-sm transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                Dashboard
              </Link>
              <Link
                href="/stream"
                className="block text-sm transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                Stream
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-primary)' }}>
              Support
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                Documentation
              </a>
              <a
                href="#"
                className="block text-sm transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                Help Center
              </a>
            </div>
          </div>

          {/* Theme Toggle & Settings */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-primary)' }}>
              Settings
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Theme
                </span>
                <button
                  onClick={toggleTheme}
                  className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none"
                  style={{
                    backgroundColor: theme === 'dark' ? 'var(--color-accent-primary)' : 'var(--color-border-primary)'
                  }}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                    style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                  />
                </button>
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  {theme === 'dark' ? 'Dark' : 'Light'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-between items-center" style={{ borderColor: 'var(--color-border-muted)' }}>
          <p className="text-sm" style={{ color: 'var(--color-text-subtle)' }}>
            © 2024 StreamRipple. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-sm transition-colors"
              style={{ color: 'var(--color-text-subtle)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-subtle)'}
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm transition-colors"
              style={{ color: 'var(--color-text-subtle)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-subtle)'}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}