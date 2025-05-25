import { PrismaClient } from '@prisma/client'
//config of prisma variable
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}
//singleton, if variable already exists, don't create a new one, if not create a new one that logs queries
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })
//if prodution not need, there isn't much reloading
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
