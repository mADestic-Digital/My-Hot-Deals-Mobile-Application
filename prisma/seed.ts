import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcryptjs.hash('admin123', 12)
  
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@unitedstarsglobal.com' },
    update: {},
    create: {
      email: 'admin@unitedstarsglobal.com',
      password: hashedPassword,
      name: 'Admin User',
    },
  })

  console.log('Admin user created:', { id: admin.id, email: admin.email, name: admin.name })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })