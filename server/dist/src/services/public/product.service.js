"use strict";
// // Path: server/src/services/public/product.service.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompareProducts = exports.getProductBySlug = exports.getSubCategoryBySlug = exports.getCategoryBySlug = exports.getAllProducts = void 0;
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
const db_1 = require("../../config/db");
const getAllProducts = async (categorySlug, subCategorySlug) => {
    return await db_1.prisma.cmsProduct.findMany({
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
exports.getAllProducts = getAllProducts;
const getCategoryBySlug = async (slug) => {
    return await db_1.prisma.cmsCategory.findUnique({
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
exports.getCategoryBySlug = getCategoryBySlug;
const getSubCategoryBySlug = async (slug) => {
    return await db_1.prisma.cmsSubCategory.findUnique({
        where: { slug },
        select: {
            id: true, name: true, slug: true,
            category: { select: { id: true, name: true, slug: true } },
        },
    });
};
exports.getSubCategoryBySlug = getSubCategoryBySlug;
const getProductBySlug = async (slug) => {
    const product = await db_1.prisma.cmsProduct.findUnique({
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
        error.statusCode = 404;
        throw error;
    }
    await db_1.prisma.cmsProduct.update({
        where: { slug },
        data: { viewCount: { increment: 1 } },
    });
    return product;
};
exports.getProductBySlug = getProductBySlug;
// ✅ NEW — Compare: categories with their published products
const getCompareProducts = async () => {
    const categories = await db_1.prisma.cmsCategory.findMany({
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
                take: 8, // max 8 products per category
            },
        },
        orderBy: { name: 'asc' },
    });
    return categories;
};
exports.getCompareProducts = getCompareProducts;
