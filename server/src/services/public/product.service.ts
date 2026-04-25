// // Path: server/src/services/public/product.service.ts

// import { prisma } from '../../config/db';

// // ==================== GET ALL PRODUCTS (with optional filters) ====================

// export const getAllProducts = async (categorySlug?: string, subCategorySlug?: string) => {
//   const products = await prisma.cmsProduct.findMany({
//     where: {
//       status: 'PUBLISHED',
//       ...(categorySlug && {
//         category: { slug: categorySlug },
//       }),
//       ...(subCategorySlug && {
//         subCategory: { slug: subCategorySlug },
//       }),
//     },
//     select: {
//       id: true,
//       name: true,
//       slug: true,
//       shortDescription: true,
//       image: true,
//       provider: true,
//       providerLogo: true,
//       interestRate: true,
//       minAmount: true,
//       maxAmount: true,
//       tenure: true,
//       featured: true,
//       isBestSeller: true,
//       badge: true,
//       category: {
//         select: { id: true, name: true, slug: true },
//       },
//       subCategory: {
//         select: { id: true, name: true, slug: true },
//       },
//     },
//     orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
//   });

//   return products;
// };

// // ==================== GET CATEGORY INFO ====================

// export const getCategoryBySlug = async (slug: string) => {
//   return await prisma.cmsCategory.findUnique({
//     where: { slug },
//     select: {
//       id: true,
//       name: true,
//       slug: true,
//       imageUrl: true,
//       subCategories: {
//         where: { isActive: true },
//         select: { id: true, name: true, slug: true },
//         orderBy: { name: 'asc' },
//       },
//     },
//   });
// };

// // ==================== GET SUB-CATEGORY INFO ====================

// export const getSubCategoryBySlug = async (slug: string) => {
//   return await prisma.cmsSubCategory.findUnique({
//     where: { slug },
//     select: {
//       id: true,
//       name: true,
//       slug: true,
//       category: { select: { id: true, name: true, slug: true } },
//     },
//   });
// };

// // ==================== GET PRODUCT BY SLUG ====================

// export const getProductBySlug = async (slug: string) => {
//   const product = await prisma.cmsProduct.findUnique({
//     where: { slug },
//     select: {
//       id: true,
//       name: true,
//       slug: true,
//       shortDescription: true,
//       description: true,
//       image: true,
//       provider: true,
//       providerLogo: true,
//       interestRate: true,
//       processingFee: true,
//       minAmount: true,
//       maxAmount: true,
//       tenure: true,
//       features: true,
//       benefits: true,
//       eligibility: true,
//       formFields: true,
//       applyUrl: true,
//       featured: true,
//       isBestSeller: true,
//       badge: true,
//       category: {
//         select: { id: true, name: true, slug: true },
//       },
//       subCategory: {
//         select: { id: true, name: true, slug: true },
//       },
//     },
//   });

//   if (!product) {
//     const error = new Error('Product not found');
//     (error as any).statusCode = 404;
//     throw error;
//   }

//   await prisma.cmsProduct.update({
//     where: { slug },
//     data: { viewCount: { increment: 1 } },
//   });

//   return product;
// };

import { prisma } from '../../config/db';

export const getAllProducts = async (categorySlug?: string, subCategorySlug?: string) => {
  return await prisma.cmsProduct.findMany({
    where: {
      status: 'PUBLISHED',
      ...(categorySlug && { category: { slug: categorySlug } }),
      ...(subCategorySlug && { subCategory: { slug: subCategorySlug } }),
    },
    select: {
      id: true, name: true, slug: true, shortDescription: true,
      image: true, provider: true, providerLogo: true,
      interestRate: true, minAmount: true, maxAmount: true,
      tenure: true, featured: true, isBestSeller: true, badge: true,
      category: { select: { id: true, name: true, slug: true } },
      subCategory: { select: { id: true, name: true, slug: true } },
    },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
  });
};

export const getCategoryBySlug = async (slug: string) => {
  return await prisma.cmsCategory.findUnique({
    where: { slug },
    select: {
      id: true, name: true, slug: true, imageUrl: true,
      subCategories: {
        where: { isActive: true },
        select: { id: true, name: true, slug: true },
        orderBy: { name: 'asc' },
      },
    },
  });
};

export const getSubCategoryBySlug = async (slug: string) => {
  return await prisma.cmsSubCategory.findUnique({
    where: { slug },
    select: {
      id: true, name: true, slug: true,
      category: { select: { id: true, name: true, slug: true } },
    },
  });
};

export const getProductBySlug = async (slug: string) => {
  const product = await prisma.cmsProduct.findUnique({
    where: { slug },
    select: {
      id: true, name: true, slug: true, shortDescription: true,
      description: true, image: true, provider: true, providerLogo: true,
      interestRate: true, processingFee: true, minAmount: true,
      maxAmount: true, tenure: true, features: true, benefits: true,
      eligibility: true, formFields: true, applyUrl: true,
      featured: true, isBestSeller: true, badge: true,
      seoTitle: true, seoDescription: true,
      category: { select: { id: true, name: true, slug: true } },
      subCategory: { select: { id: true, name: true, slug: true } },
    },
  });

  if (!product) {
    const error = new Error('Product not found');
    (error as any).statusCode = 404;
    throw error;
  }

  await prisma.cmsProduct.update({
    where: { slug },
    data: { viewCount: { increment: 1 } },
  });

  return product;
};

// ✅ NEW — Compare: categories with their published products
export const getCompareProducts = async () => {
  const categories = await prisma.cmsCategory.findMany({
    where: {
      isActive: true,
      products: {
        some: { status: 'PUBLISHED' },
      },
    },
    select: {
      id: true,
      name: true,
      slug: true,
      products: {
        where: { status: 'PUBLISHED' },
        select: {
          id: true,
          name: true,
          slug: true,
          provider: true,
          providerLogo: true,
          interestRate: true,
          processingFee: true,
          minAmount: true,
          maxAmount: true,
          tenure: true,
          applyUrl: true,
          featured: true,
          isBestSeller: true,
          badge: true,
        },
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
        take: 8,  // max 8 products per category
      },
    },
    orderBy: { name: 'asc' },
  });

  return categories;
};