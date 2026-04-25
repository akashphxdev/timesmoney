import { prisma } from '../../config/db';

// ==================== CREATE PRODUCT LEAD ====================

interface CreateProductLeadInput {
  name: string;
  phone: string;
  email?: string;
  productId: string;
  categoryId?: string;
  customData?: Record<string, any>;
}

export const createProductLead = async (input: CreateProductLeadInput) => {
  const { name, phone, email, productId, customData } = input;

  // Product exist check
  const product = await prisma.cmsProduct.findUnique({
    where: { id: productId },
    select: { id: true, name: true, categoryId: true },
  });

  if (!product) {
    const error = new Error('Product not found');
    (error as any).statusCode = 404;
    throw error;
  }

  const lead = await prisma.cmsLead.create({
    data: {
      name,
      phone,
      email,
      source: 'product_page',
      status: 'NEW',
      productId: product.id,
      categoryId: product.categoryId,
      ...(customData && { customData }),
    },
    select: {
      id: true,
      name: true,
      phone: true,
      status: true,
      createdAt: true,
      product: {
        select: { id: true, name: true },
      },
    },
  });

  return lead;
};