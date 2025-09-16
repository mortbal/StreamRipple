import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createDemoUser() {
  try {
    // Check if demo user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: 'demo@streamripple.com' },
          { name: 'demo' },
        ],
      },
    })

    if (existingUser) {
      console.log('Demo user already exists')
      return
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('demo', 12)

    // Create demo user
    const demoUser = await prisma.user.create({
      data: {
        name: 'demo',
        email: 'demo@streamripple.com',
        password: hashedPassword,
      },
    })

    console.log('Demo user created successfully:', {
      id: demoUser.id,
      name: demoUser.name,
      email: demoUser.email,
    })
  } catch (error) {
    console.error('Error creating demo user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createDemoUser()