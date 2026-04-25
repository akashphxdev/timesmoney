import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../config/db';

export const loginAdmin = async (email: string, password: string) => {
  const admin = await prisma.cmsAdmin.findUnique({
    where: { email }
  });

  if (!admin) throw new Error('Invalid email or password');
  if (!admin.isActive) throw new Error('Account is disabled');

  const isMatch = await bcrypt.compare(password, admin.passwordHash);
  if (!isMatch) throw new Error('Invalid email or password');

  await prisma.cmsAdmin.update({
    where: { id: admin.id },
    data: { lastLoginAt: new Date() }
  });

  const token = jwt.sign(
  { id: admin.id, email: admin.email, role: admin.role },
  process.env.JWT_SECRET as string,
  { expiresIn: '7d' }
);

  return {
    token,
    admin: {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role
    }
  };
};