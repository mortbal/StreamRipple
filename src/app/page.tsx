'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import PageWrapper from '@/components/ui/PageWrapper'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <PageWrapper
      showBackground={true}
      className="relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent" style={{
              backgroundImage: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              StreamRipple
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Connect your Unreal Engine applications to the web. Stream interactive 3D content directly to browsers with pixel-perfect quality.
            </p>
          </div>

          {/* Action Section */}
          <div className="mb-20">
            {session ? (
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium" style={{
                  background: 'var(--gradient-card)',
                  color: 'var(--color-text-muted)',
                  boxShadow: 'var(--shadow-card)'
                }}>
                  Welcome back, {session.user?.name || session.user?.email}!
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/dashboard"
                    className="group px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    style={{
                      background: 'var(--gradient-primary)',
                      boxShadow: 'var(--shadow-primary)'
                    }}
                  >
                    <span className="flex items-center gap-2">
                      Go to Dashboard
                    </span>
                  </Link>
                  <Link
                    href="/stream"
                    className="group px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    style={{
                      background: 'var(--gradient-secondary)',
                      boxShadow: 'var(--shadow-secondary)'
                    }}
                  >
                    <span className="flex items-center gap-2">
                      Join Stream
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-xl font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  Ready to transform your streaming experience?
                </p>
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                  style={{
                    background: 'var(--gradient-primary)',
                    boxShadow: 'var(--shadow-primary)'
                  }}
                >
                  Start Streaming Now
                </Link>
              </div>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Real-time Streaming',
                description: 'Stream Unreal Engine content with minimal latency and maximum quality',
                gradient: 'var(--gradient-primary)'
              },
              {
                title: 'Easy Integration',
                description: 'Simple setup process to connect your UE applications to the web',
                gradient: 'var(--gradient-secondary)'
              },
              {
                title: 'Session Management',
                description: 'Create and manage streaming sessions with unique session IDs',
                gradient: 'var(--gradient-primary)'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm"
                style={{
                  background: 'var(--gradient-card)',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--color-border-muted)'
                }}
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {feature.description}
                </p>
                <div className="mt-6 h-1 rounded-full transition-all duration-300 group-hover:scale-x-100 scale-x-0" style={{ background: feature.gradient }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
