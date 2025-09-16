'use client'

import { signOut } from 'next-auth/react'
import { useEffect } from 'react'

export default function SignOut() {
  useEffect(() => {
    signOut({ callbackUrl: '/' })
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Signing you out...</h2>
        <p className="mt-2 text-gray-600">Please wait while we sign you out</p>
      </div>
    </div>
  )
}