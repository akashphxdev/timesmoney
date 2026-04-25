import bcrypt from 'bcryptjs';
import { prisma } from '../../config/db';

// Get all admins
export const getAllAdmins = async () => {
  return await prisma.cmsAdmin.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      lastLoginAt: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' }
  });
};

// Get single admin
export const getAdminById = async (id: string) => {
  const admin = await prisma.cmsAdmin.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      lastLoginAt: true,
      createdAt: true,
    }
  });

  if (!admin) throw new Error('Admin not found');
  return admin;
};

// Create admin
export const createAdmin = async (body: {
  name: string;
  email: string;
  password: string;
  role: string;
}) => {
  const existing = await prisma.cmsAdmin.findUnique({
    where: { email: body.email }
  });

  if (existing) throw new Error('Email already exists');

  const passwordHash = await bcrypt.hash(body.password, 10);

  return await prisma.cmsAdmin.create({
    data: {
      name: body.name,
      email: body.email,
      passwordHash,
      role: body.role as any,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
    }
  });
};

// Update admin
export const updateAdmin = async (id: string, body: {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  isActive?: boolean;
}) => {
  const admin = await prisma.cmsAdmin.findUnique({ where: { id } });
  if (!admin) throw new Error('Admin not found');

  const data: any = {};
  if (body.name) data.name = body.name;
  if (body.email) data.email = body.email;
  if (body.role) data.role = body.role;
  if (body.isActive !== undefined) data.isActive = body.isActive;
  if (body.password) data.passwordHash = await bcrypt.hash(body.password, 10);

  return await prisma.cmsAdmin.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
    }
  });
};

// Delete admin
export const deleteAdmin = async (id: string) => {
  const admin = await prisma.cmsAdmin.findUnique({ where: { id } });
  if (!admin) throw new Error('Admin not found');

  await prisma.cmsAdmin.delete({ where: { id } });
  return { message: 'Admin deleted successfully' };
};