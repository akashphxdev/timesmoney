"use strict";
// import { prisma } from '../../config/db';
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeadEmail = exports.createHeroLead = exports.getHomeData = void 0;
// // ==================== GET HOME DATA ====================
// export const getHomeData = async () => {
//   const [categories, subCategories, partners, products, testimonials, blogs] =
//     await Promise.all([
//       // Categories — active only, card fields
//       prisma.cmsCategory.findMany({
//         where: { isActive: true },
//         select: {
//           id: true,
//           name: true,
//           slug: true,
//           imageUrl: true,
//         },
//         orderBy: { createdAt: 'asc' },
//       }),
//       // Sub Categories — active only, apni category ke saath
//       prisma.cmsSubCategory.findMany({
//         where: { isActive: true },
//         select: {
//           id: true,
//           name: true,
//           slug: true,
//           imageUrl: true,
//           categoryId: true,
//           category: {
//             select: {
//               id: true,
//               name: true,
//             },
//           },
//         },
//         orderBy: { createdAt: 'asc' },
//       }),
//       // Partners — active only
//       prisma.cmsPartner.findMany({
//         where: { isActive: true },
//         select: {
//           id: true,
//           name: true,
//           imageUrl: true,
//         },
//         orderBy: { createdAt: 'asc' },
//       }),
//       // Products — PUBLISHED only, card fields
//       prisma.cmsProduct.findMany({
//         where: { status: 'PUBLISHED' },
//         select: {
//           id: true,
//           name: true,
//           slug: true,
//           shortDescription: true,
//           image: true,
//           provider: true,
//           providerLogo: true,
//           interestRate: true,
//           minAmount: true,
//           maxAmount: true,
//           tenure: true,
//           featured: true,
//           isBestSeller: true,
//           badge: true,
//           category: {
//             select: {
//               id: true,
//               name: true,
//               slug: true,
//             },
//           },
//           subCategory: {
//             select: {
//               id: true,
//               name: true,
//               slug: true,
//             },
//           },
//         },
//         orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
//       }),
//       // Testimonials — active only, featured pehle
//       prisma.cmsTestimonial.findMany({
//         where: { active: true },
//         select: {
//           id: true,
//           name: true,
//           role: true,
//           avatar: true,
//           content: true,
//           rating: true,
//           featured: true,
//         },
//         orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
//       }),
//       // Blogs — PUBLISHED only, latest 6, card fields
//       prisma.cmsBlog.findMany({
//         where: { status: 'PUBLISHED' },
//         select: {
//           id: true,
//           title: true,
//           slug: true,
//           excerpt: true,
//           coverImage: true,
//           author: true,
//           tags: true,
//           publishedAt: true,
//           category: {
//             select: {
//               id: true,
//               name: true,
//               slug: true,
//             },
//           },
//         },
//         orderBy: { publishedAt: 'desc' },
//         take: 6,
//       }),
//     ]);
//   return {
//     categories,
//     subCategories,
//     partners,
//     products,
//     testimonials,
//     blogs,
//   };
// };
// // ==================== CREATE HERO LEAD ====================
// interface CreateHeroLeadInput {
//   name: string;
//   phone: string;
//   categoryId: string;
//   subCategoryId?: string;
//   employmentType?: string;
// }
// export const createHeroLead = async ({
//   name,
//   phone,
//   categoryId,
//   subCategoryId,
//   employmentType,
// }: CreateHeroLeadInput) => {
//   const category = await prisma.cmsCategory.findUnique({
//     where: { id: categoryId },
//     select: { id: true, name: true, slug: true },
//   });
//   if (!category) {
//     const error = new Error('Selected category not found');
//     (error as any).statusCode = 400;
//     throw error;
//   }
//   let subCategory = null;
//   if (subCategoryId) {
//     subCategory = await prisma.cmsSubCategory.findFirst({
//       where: { id: subCategoryId, categoryId },
//       select: { id: true, slug: true },
//     });
//     if (!subCategory) {
//       const error = new Error('Sub-category does not belong to selected category');
//       (error as any).statusCode = 400;
//       throw error;
//     }
//   }
//   const lead = await prisma.cmsLead.create({
//     data: {
//       name,
//       phone,
//       categoryId,
//       source: 'hero_form',
//       status: 'NEW',
//       customData: {
//         ...(subCategoryId && { subCategoryId }),
//         ...(employmentType && { employmentType }),
//       },
//     },
//     select: {
//       id: true,
//       name: true,
//       phone: true,
//       status: true,
//       createdAt: true,
//       category: { select: { id: true, name: true, slug: true } },
//     },
//   });
//   return {
//     ...lead,
//     subCategorySlug: subCategory?.slug ?? null,
//   };
// };
// // ==================== UPDATE LEAD EMAIL ====================
// interface UpdateLeadEmailInput {
//   leadId: string;
//   email: string;
// }
// export const updateLeadEmail = async ({ leadId, email }: UpdateLeadEmailInput) => {
//   const lead = await prisma.cmsLead.findUnique({
//     where: { id: leadId },
//     select: { id: true },
//   });
//   if (!lead) {
//     const error = new Error('Lead not found');
//     (error as any).statusCode = 404;
//     throw error;
//   }
//   const updated = await prisma.cmsLead.update({
//     where: { id: leadId },
//     data: { email },
//     select: { id: true, email: true },
//   });
//   return updated;
// };
const db_1 = require("../../config/db");
// ==================== GET HOME DATA ====================
const getHomeData = async () => {
    const [categories, subCategories, partners, products, testimonials, blogs] = await Promise.all([
        db_1.prisma.cmsCategory.findMany({
            where: { isActive: true },
            select: { id: true, name: true, slug: true, imageUrl: true },
            orderBy: { createdAt: 'asc' },
        }),
        db_1.prisma.cmsSubCategory.findMany({
            where: { isActive: true },
            select: {
                id: true, name: true, slug: true, imageUrl: true, categoryId: true,
                category: { select: { id: true, name: true } },
            },
            orderBy: { createdAt: 'asc' },
        }),
        db_1.prisma.cmsPartner.findMany({
            where: { isActive: true },
            select: { id: true, name: true, imageUrl: true },
            orderBy: { createdAt: 'asc' },
        }),
        db_1.prisma.cmsProduct.findMany({
            where: { status: 'PUBLISHED' },
            select: {
                id: true, name: true, slug: true, shortDescription: true, image: true,
                provider: true, providerLogo: true, interestRate: true, minAmount: true,
                maxAmount: true, tenure: true, featured: true, isBestSeller: true, badge: true,
                category: { select: { id: true, name: true, slug: true } },
                subCategory: { select: { id: true, name: true, slug: true } },
            },
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
        }),
        db_1.prisma.cmsTestimonial.findMany({
            where: { active: true },
            select: { id: true, name: true, role: true, avatar: true, content: true, rating: true, featured: true },
            orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
        }),
        db_1.prisma.cmsBlog.findMany({
            where: { status: 'PUBLISHED' },
            select: {
                id: true, title: true, slug: true, excerpt: true, coverImage: true,
                author: true, tags: true, publishedAt: true,
                category: { select: { id: true, name: true, slug: true } },
            },
            orderBy: { publishedAt: 'desc' },
            take: 6,
        }),
    ]);
    return { categories, subCategories, partners, products, testimonials, blogs };
};
exports.getHomeData = getHomeData;
const createHeroLead = async ({ name, phone, categoryId, subCategoryId, employmentType, }) => {
    const category = await db_1.prisma.cmsCategory.findUnique({
        where: { id: categoryId },
        select: { id: true, name: true, slug: true },
    });
    if (!category) {
        const error = new Error('Selected category not found');
        error.statusCode = 400;
        throw error;
    }
    let subCategory = null;
    if (subCategoryId) {
        subCategory = await db_1.prisma.cmsSubCategory.findFirst({
            where: { id: subCategoryId, categoryId },
            select: { id: true, name: true, slug: true }, // name bhi fetch karo
        });
        if (!subCategory) {
            const error = new Error('Sub-category does not belong to selected category');
            error.statusCode = 400;
            throw error;
        }
    }
    const lead = await db_1.prisma.cmsLead.create({
        data: {
            name,
            phone,
            categoryId,
            source: 'hero_form',
            status: 'NEW',
            customData: {
                ...(subCategoryId && { subCategoryId }),
                ...(employmentType && { employmentType }),
            },
        },
        select: {
            id: true,
            name: true,
            phone: true,
            status: true,
            createdAt: true,
            category: { select: { id: true, name: true, slug: true } },
        },
    });
    return {
        ...lead,
        categoryName: category.name, // category name
        subCategorySlug: subCategory?.slug ?? null,
        subCategoryName: subCategory?.name ?? null, // sub category name
    };
};
exports.createHeroLead = createHeroLead;
const updateLeadEmail = async ({ leadId, email }) => {
    const lead = await db_1.prisma.cmsLead.findUnique({
        where: { id: leadId },
        select: {
            id: true,
            name: true, // name email mein use hoga
            category: { select: { name: true } },
            customData: true, // subCategoryId yahan se milega
        },
    });
    if (!lead) {
        const error = new Error('Lead not found');
        error.statusCode = 404;
        throw error;
    }
    // subCategoryName fetch karo agar customData mein subCategoryId hai
    let subCategoryName = null;
    const customData = lead.customData;
    if (customData?.subCategoryId) {
        const sub = await db_1.prisma.cmsSubCategory.findUnique({
            where: { id: customData.subCategoryId },
            select: { name: true },
        });
        subCategoryName = sub?.name ?? null;
    }
    const updated = await db_1.prisma.cmsLead.update({
        where: { id: leadId },
        data: { email },
        select: { id: true, email: true },
    });
    return {
        ...updated,
        name: lead.name,
        categoryName: lead.category?.name ?? null,
        subCategoryName,
    };
};
exports.updateLeadEmail = updateLeadEmail;
