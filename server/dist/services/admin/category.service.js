"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleCategoryStatus = exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.getAllCategories = void 0;
const db_1 = require("../../config/db");
const imageHelper_1 = require("../../utils/imageHelper");
const getAllCategories = async () => {
    return await db_1.prisma.cmsCategory.findMany({
        orderBy: { createdAt: 'desc' },
        include: { _count: { select: { subCategories: true } } },
    });
};
exports.getAllCategories = getAllCategories;
const getCategoryById = async (id) => {
    const category = await db_1.prisma.cmsCategory.findUnique({
        where: { id },
        include: { _count: { select: { subCategories: true } } },
    });
    if (!category)
        throw new Error('Category not found');
    return category;
};
exports.getCategoryById = getCategoryById;
const createCategory = async (body) => {
    const existing = await db_1.prisma.cmsCategory.findUnique({ where: { slug: body.slug } });
    if (existing)
        throw new Error('Slug already exists');
    return await db_1.prisma.cmsCategory.create({
        data: {
            name: body.name,
            slug: body.slug,
            imageUrl: body.imageUrl,
            isActive: body.isActive !== undefined ? Boolean(body.isActive) : true,
        },
    });
};
exports.createCategory = createCategory;
const updateCategory = async (id, body, newImageUrl) => {
    const category = await db_1.prisma.cmsCategory.findUnique({ where: { id } });
    if (!category)
        throw new Error('Category not found');
    if (body.slug && body.slug !== category.slug) {
        const existing = await db_1.prisma.cmsCategory.findUnique({ where: { slug: body.slug } });
        if (existing)
            throw new Error('Slug already exists');
    }
    if (newImageUrl && category.imageUrl)
        (0, imageHelper_1.deleteImage)(category.imageUrl);
    return await db_1.prisma.cmsCategory.update({
        where: { id },
        data: {
            name: body.name !== undefined ? body.name : category.name,
            slug: body.slug !== undefined ? body.slug : category.slug,
            imageUrl: newImageUrl || category.imageUrl,
            isActive: body.isActive !== undefined
                ? body.isActive === 'true' || body.isActive === true
                : category.isActive,
        },
    });
};
exports.updateCategory = updateCategory;
const deleteCategory = async (id) => {
    const category = await db_1.prisma.cmsCategory.findUnique({
        where: { id },
        include: { _count: { select: { subCategories: true } } },
    });
    if (!category)
        throw new Error('Category not found');
    if (category._count.subCategories > 0)
        throw new Error('Pehle is category ki sub-categories delete karo');
    if (category.imageUrl)
        (0, imageHelper_1.deleteImage)(category.imageUrl);
    await db_1.prisma.cmsCategory.delete({ where: { id } });
    return { message: 'Category deleted successfully' };
};
exports.deleteCategory = deleteCategory;
const toggleCategoryStatus = async (id) => {
    const category = await db_1.prisma.cmsCategory.findUnique({ where: { id } });
    if (!category)
        throw new Error('Category not found');
    return await db_1.prisma.cmsCategory.update({
        where: { id },
        data: { isActive: !category.isActive },
    });
};
exports.toggleCategoryStatus = toggleCategoryStatus;
