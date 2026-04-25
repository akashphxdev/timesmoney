import { prisma } from '../../config/db';

export const getAllLeads = async (filters: {
  status?: string;
  categoryId?: string;
  productId?: string;
}) => {
  const where: any = {};
  if (filters.status) where.status = filters.status;
  if (filters.categoryId) where.categoryId = filters.categoryId;
  if (filters.productId) where.productId = filters.productId;

  return await prisma.cmsLead.findMany({
    where,
    include: {
      product: { select: { id: true, name: true } },
      category: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: 'desc' }
  });
};

export const getLeadById = async (id: string) => {
  const lead = await prisma.cmsLead.findUnique({
    where: { id },
    include: {
      product: { select: { id: true, name: true } },
      category: { select: { id: true, name: true } },
    }
  });
  if (!lead) throw new Error('Lead not found');
  return lead;
};

export const updateLead = async (id: string, body: {
  status?: string;
  notes?: string;
  assignedTo?: string;
}) => {
  const lead = await prisma.cmsLead.findUnique({ where: { id } });
  if (!lead) throw new Error('Lead not found');

  return await prisma.cmsLead.update({
    where: { id },
    data: {
      status: body.status as any,
      notes: body.notes,
      assignedTo: body.assignedTo,
    }
  });
};

export const deleteLead = async (id: string) => {
  const lead = await prisma.cmsLead.findUnique({ where: { id } });
  if (!lead) throw new Error('Lead not found');
  await prisma.cmsLead.delete({ where: { id } });
  return { message: 'Lead deleted successfully' };
};