import bcrypt from 'bcryptjs';
import { prisma } from './db';

const seed = async () => {
  const passwordHash = await bcrypt.hash('Admin@123', 10);

  const admin = await prisma.cmsAdmin.upsert({
    where: { email: 'admin@timesmoney.com' },
    update: {},
    create: {
      name: 'Super Admin',
      email: 'admin@timesmoney.com',
      passwordHash,
      role: 'SUPER_ADMIN',
      isActive: true
    }
  });

  console.log('✅ Admin created:', admin.email);
  await prisma.$disconnect();
  process.exit(0);
};

seed().catch((e) => {
  console.error('❌ Seed failed:', e);
  process.exit(1);
});