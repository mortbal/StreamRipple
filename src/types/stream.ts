export type StreamStatus = 'INACTIVE' | 'STARTING' | 'ACTIVE' | 'STOPPING'

export type StreamQuality = 'LOW' | 'MEDIUM' | 'HIGH' | 'ULTRA'

export interface StreamSession {
  id: string
  uid: string
  userId: string
  title?: string
  status: StreamStatus
  quality: StreamQuality
  createdAt: Date
  updatedAt: Date
  endedAt?: Date
}