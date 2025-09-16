'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import PageWrapper from '@/components/ui/PageWrapper'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <PageWrapper
      showBackground={true}
      className="relative overflow-hidden py-16"
      style={{ background: 'var(--gradient-hero)', minHeight: 'calc(100vh - 200px)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent" style={{
            backgroundImage: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl" style={{ color: 'var(--color-text-muted)' }}>
            Hello, {session.user?.name || session.user?.email}! Your pixel streaming control center.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Create Session Card */}
          <div className="group p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm" style={{
            background: 'var(--gradient-card)',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--color-border-muted)'
          }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Create Stream
            </h3>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Start a new streaming session for your Unreal Engine application
            </p>
            <button
              className="w-full py-3 px-6 rounded-xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--shadow-primary)'
              }}
            >
              Create New Session
            </button>
          </div>

          {/* Active Sessions Card */}
          <div className="group p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm" style={{
            background: 'var(--gradient-card)',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--color-border-muted)'
          }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Active Sessions
            </h3>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Monitor and manage your current streaming sessions
            </p>
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
              <p className="text-sm" style={{ color: 'var(--color-text-subtle)' }}>
                No active sessions
              </p>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="group p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm md:col-span-2 lg:col-span-1" style={{
            background: 'var(--gradient-card)',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--color-border-muted)'
          }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Analytics
            </h3>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              View streaming performance and usage statistics
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Total Sessions</span>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Streaming Time</span>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>0h 0m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}