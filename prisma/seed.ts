import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Hash the password
  const hashedPassword = await bcrypt.hash('admin 1234', 12)

  // Create SuperAdmin
  const superAdmin = await prisma.admin.upsert({
    where: { email: 'mdsoyeb181811@gmail.com' },
    update: {},
    create: {
      email: 'mdsoyeb181811@gmail.com',
      password: hashedPassword,
      name: 'SuperAdmin',
    },
  })

  console.log('✅ SuperAdmin created:', {
    id: superAdmin.id,
    email: superAdmin.email,
    name: superAdmin.name,
  })

  console.log('🌱 Seed completed!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Seed failed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })