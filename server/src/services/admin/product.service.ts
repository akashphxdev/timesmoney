import { prisma } from '../../config/db';
import { deleteImage } from '../../utils/imageHelper';

export const getAllProducts = async () => {
  return await prisma.cmsProduct.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      image: true,
      provider: true,
      status: true,
      featured: true,
      isBestSeller: true,
      sortOrder: true,
      viewCount: true,
      createdAt: true,
      category: { select: { id: true, name: true } },
      subCategory: { select: { id: true, name: true } },
    },
    orderBy: { sortOrder: 'asc' }
  });
};

export const getProductById = async (id: string) => {
  const product = await prisma.cmsProduct.findUnique({
    where: { id },
    include: {
      category: { select: { id: true, name: true } },
      subCategory: { select: { id: true, name: true } },
    }
  });
  if (!product) throw new Error('Product not found');
  return product;
};

export const createProduct = async (body: any, files: any) => {
  const existing = await prisma.cmsProduct.findUnique({ where: { slug: body.slug } });
  if (existing) throw new Error('Slug already exists');

  const image = files?.image?.[0] ? `/uploads/products/${files.image[0].filename}` : undefined;
  const providerLogo = files?.providerLogo?.[0] ? `/uploads/provider-logos/${files.providerLogo[0].filename}` : undefined;

  return await prisma.cmsProduct.create({
    data: {
      name: body.name,
      slug: body.slug,
      shortDescription: body.shortDescription,
      description: body.description,
      image,
      provider: body.provider,
      providerLogo,
      interestRate: body.interestRate,
      processingFee: body.processingFee,
      minAmount: body.minAmount,
      maxAmount: body.maxAmount,
      tenure: body.tenure,
      features: body.features ? JSON.parse(body.features) : null,
      benefits: body.benefits ? JSON.parse(body.benefits) : null,
      eligibility: body.eligibility ? JSON.parse(body.eligibility) : null,
      formFields: body.formFields ? JSON.parse(body.formFields) : null,
      applyUrl: body.applyUrl,
      status: body.status || 'DRAFT',
      featured: body.featured === 'true',
      isBestSeller: body.isBestSeller === 'true',
      badge: body.badge,
      sortOrder: body.sortOrder ? parseInt(body.sortOrder) : 0,
      seoTitle: body.seoTitle,
      seoDescription: body.seoDescription,
      categoryId: body.categoryId || null,
      subCategoryId: body.subCategoryId || null,
    }
  });
};

export const updateProduct = async (id: string, body: any, files: any) => {
  const product = await prisma.cmsProduct.findUnique({ where: { id } });
  if (!product) throw new Error('Product not found');

  let image = product.image;
  let providerLogo = product.providerLogo;

  if (files?.image?.[0]) {
    if (product.image) deleteImage(product.image);
    image = `/uploads/products/${files.image[0].filename}`;
  }

  if (files?.providerLogo?.[0]) {
    if (product.providerLogo) deleteImage(product.providerLogo);
    providerLogo = `/uploads/provider-logos/${files.providerLogo[0].filename}`;
  }

  return await prisma.cmsProduct.update({
    where: { id },
    data: {
      name: body.name,
      slug: body.slug,
      shortDescription: body.shortDescription,
      description: body.description,
      image,
      provider: body.provider,
      providerLogo,
      interestRate: body.interestRate,
      processingFee: body.processingFee,
      minAmount: body.minAmount,
      maxAmount: body.maxAmount,
      tenure: body.tenure,
      features: body.features ? JSON.parse(body.features) : null,
      benefits: body.benefits ? JSON.parse(body.benefits) : null,
      eligibility: body.eligibility ? JSON.parse(body.eligibility) : null,
      formFields: body.formFields ? JSON.parse(body.formFields) : null,
      applyUrl: body.applyUrl,
      status: body.status,
      featured: body.featured === 'true',
      isBestSeller: body.isBestSeller === 'true',
      badge: body.badge,
      sortOrder: body.sortOrder ? parseInt(body.sortOrder) : 0,
      seoTitle: body.seoTitle,
      seoDescription: body.seoDescription,
      categoryId: body.categoryId || null,
      subCategoryId: body.subCategoryId || null,
    }
  });
};

export const deleteProduct = async (id: string) => {
  const product = await prisma.cmsProduct.findUnique({ where: { id } });
  if (!product) throw new Error('Product not found');
  if (product.image) deleteImage(product.image);
  if (product.providerLogo) deleteImage(product.providerLogo);
  await prisma.cmsProduct.delete({ where: { id } });
  return { message: 'Product deleted successfully' };
};