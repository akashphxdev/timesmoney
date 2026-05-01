"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleSubCategoryStatus = exports.deleteSubCategory = exports.updateSubCategory = exports.createSubCategory = exports.getSubCategoryById = exports.getAllSubCategories = void 0;
const db_1 = require("../../config/db");
const imageHelper_1 = require("../../utils/imageHelper");
const getAllSubCategories = async () => {
    return await db_1.prisma.cmsSubCategory.findMany({
        orderBy: { createdAt: 'desc' },
        include: { category: { select: { id: true, name: true } } },
    });
};
exports.getAllSubCategories = getAllSubCategories;
const getSubCategoryById = async (id) => {
    const sub = await db_1.prisma.cmsSubCategory.findUnique({
        where: { id },
        include: { category: { select: { id: true, name: true } } },
    });
    if (!sub)
        throw new Error('Sub-category not found');
    return sub;
};
exports.getSubCategoryById = getSubCategoryById;
const createSubCategory = async (body) => {
    const existing = await db_1.prisma.cmsSubCategory.findUnique({ where: { slug: body.slug } });
    if (existing)
        throw new Error('Slug already exists');
    const category = await db_1.prisma.cmsCategory.findUnique({ where: { id: body.categoryId } });
    if (!category)
        throw new Error('Category not found');
    return await db_1.prisma.cmsSubCategory.create({
        data: {
            name: body.name,
            slug: body.slug,
            categoryId: body.categoryId,
            imageUrl: body.imageUrl,
            isActive: body.isActive !== undefined ? Boolean(body.isActive) : true,
        },
        include: { category: { select: { id: true, name: true } } },
    });
};
exports.createSubCategory = createSubCategory;
const updateSubCategory = async (id, body, newImageUrl) => {
    const sub = await db_1.prisma.cmsSubCategory.findUnique({ where: { id } });
    if (!sub)
        throw new Error('Sub-category not found');
    if (body.slug && body.slug !== sub.slug) {
        const existing = await db_1.prisma.cmsSubCategory.findUnique({ where: { slug: body.slug } });
        if (existing)
            throw new Error('Slug already exists');
    }
    if (body.categoryId) {
        const category = await db_1.prisma.cmsCategory.findUnique({ where: { id: body.categoryId } });
        if (!category)
            throw new Error('Category not found');
    }
    if (newImageUrl && sub.imageUrl)
        (0, imageHelper_1.deleteImage)(sub.imageUrl);
    return await db_1.prisma.cmsSubCategory.update({
        where: { id },
        data: {
            name: body.name !== undefined ? body.name : sub.name,
            slug: body.slug !== undefined ? body.slug : sub.slug,
            categoryId: body.categoryId !== undefined ? body.categoryId : sub.categoryId,
            imageUrl: newImageUrl || sub.imageUrl,
            isActive: body.isActive !== undefined
                ? body.isActive === 'true' || body.isActive === true
                : sub.isActive,
        },
        include: { category: { select: { id: true, name: true } } },
    });
};
exports.updateSubCategory = updateSubCategory;
const deleteSubCategory = async (id) => {
    const sub = await db_1.prisma.cmsSubCategory.findUnique({ where: { id } });
    if (!sub)
        throw new Error('Sub-category not found');
    if (sub.imageUrl)
        (0, imageHelper_1.deleteImage)(sub.imageUrl);
    await db_1.prisma.cmsSubCategory.delete({ where: { id } });
    return { message: 'Sub-category deleted successfully' };
};
exports.deleteSubCategory = deleteSubCategory;
const toggleSubCategoryStatus = async (id) => {
    const sub = await db_1.prisma.cmsSubCategory.findUnique({ where: { id } });
    if (!sub)
        throw new Error('Sub-category not found');
    return await db_1.prisma.cmsSubCategory.update({
        where: { id },
        data: { isActive: !sub.isActive },
    });
};
exports.toggleSubCategoryStatus = toggleSubCategoryStatus;
