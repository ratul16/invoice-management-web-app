import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  try {
    const users = await prisma.user.findMany()

    return {
      success: true,
      data: users,
      count: users.length,
    }
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch users',
      data: error,
    })
  }
  finally {
    await prisma.$disconnect()
  }
})
