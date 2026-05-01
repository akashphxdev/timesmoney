"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubCategoriesByCategorySlug = exports.getAllCategories = void 0;
const db_1 = require("../../config/db");
// Saari active categories (with sub-categories)
const getAllCategories = async () => {
    return db_1.prisma.cmsCategory.findMany({
        where: { isActive: true },
        orderBy: { createdAt: 'desc' },
        select: {
            id: true,
            name: true,
            slug: true,
            imageUrl: true,
            subCategories: {
                where: { isActive: true },
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    imageUrl: true,
                },
            },
        },
    });
};
exports.getAllCategories = getAllCategories;
// Ek category by slug + uski sub-categories
const getSubCategoriesByCategorySlug = async (slug) => {
    return db_1.prisma.cmsCategory.findUnique({
        where: { slug },
        select: {
            id: true,
            name: true,
            slug: true,
            imageUrl: true,
            subCategories: {
                where: { isActive: true },
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    imageUrl: true,
                },
            },
        },
    });
};
exports.getSubCategoriesByCategorySlug = getSubCategoriesByCategorySlug;
