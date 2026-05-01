"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.createBlog = exports.getBlogById = exports.getAllBlogs = void 0;
const db_1 = require("../../config/db");
const imageHelper_1 = require("../../utils/imageHelper");
const getAllBlogs = async () => {
    return await db_1.prisma.cmsBlog.findMany({
        select: {
            id: true,
            title: true,
            slug: true,
            status: true,
            author: true,
            coverImage: true,
            viewCount: true,
            publishedAt: true,
            createdAt: true,
            category: { select: { id: true, name: true } },
            subCategory: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: 'desc' },
    });
};
exports.getAllBlogs = getAllBlogs;
const getBlogById = async (id) => {
    const blog = await db_1.prisma.cmsBlog.findUnique({
        where: { id },
        include: {
            category: { select: { id: true, name: true } },
            subCategory: { select: { id: true, name: true } },
        },
    });
    if (!blog)
        throw new Error('Blog not found');
    return blog;
};
exports.getBlogById = getBlogById;
const createBlog = async (body) => {
    const existing = await db_1.prisma.cmsBlog.findUnique({ where: { slug: body.slug } });
    if (existing)
        throw new Error('Slug already exists');
    return await db_1.prisma.cmsBlog.create({
        data: {
            title: body.title,
            slug: body.slug,
            excerpt: body.excerpt,
            content: body.content,
            coverImage: body.coverImage,
            categoryId: body.categoryId || null,
            subCategoryId: body.subCategoryId || null,
            tags: body.tags || [],
            author: body.author,
            status: body.status || 'DRAFT',
            seoTitle: body.seoTitle,
            seoDescription: body.seoDescription,
            publishedAt: body.status === 'PUBLISHED' ? new Date() : null,
        },
    });
};
exports.createBlog = createBlog;
const updateBlog = async (id, body, newCoverImage) => {
    const blog = await db_1.prisma.cmsBlog.findUnique({ where: { id } });
    if (!blog)
        throw new Error('Blog not found');
    if (newCoverImage && blog.coverImage)
        (0, imageHelper_1.deleteImage)(blog.coverImage);
    if (body.content && blog.content) {
        const oldImages = (0, imageHelper_1.extractImagesFromContent)(blog.content);
        const newImages = (0, imageHelper_1.extractImagesFromContent)(body.content);
        const removedImages = oldImages.filter((img) => !newImages.includes(img));
        (0, imageHelper_1.deleteMultipleImages)(removedImages);
    }
    return await db_1.prisma.cmsBlog.update({
        where: { id },
        data: {
            title: body.title,
            slug: body.slug,
            excerpt: body.excerpt,
            content: body.content,
            coverImage: newCoverImage || blog.coverImage,
            categoryId: body.categoryId || null,
            subCategoryId: body.subCategoryId || null,
            tags: body.tags || [],
            author: body.author,
            status: body.status,
            seoTitle: body.seoTitle,
            seoDescription: body.seoDescription,
            publishedAt: body.status === 'PUBLISHED' && !blog.publishedAt ? new Date() : blog.publishedAt,
        },
    });
};
exports.updateBlog = updateBlog;
const deleteBlog = async (id) => {
    const blog = await db_1.prisma.cmsBlog.findUnique({ where: { id } });
    if (!blog)
        throw new Error('Blog not found');
    if (blog.coverImage)
        (0, imageHelper_1.deleteImage)(blog.coverImage);
    const contentImages = (0, imageHelper_1.extractImagesFromContent)(blog.content);
    (0, imageHelper_1.deleteMultipleImages)(contentImages);
    await db_1.prisma.cmsBlog.delete({ where: { id } });
    return { message: 'Blog deleted successfully' };
};
exports.deleteBlog = deleteBlog;
