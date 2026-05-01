"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogBySlug = exports.getAllBlogs = void 0;
const db_1 = require("../../config/db");
// =====================
// GET ALL BLOGS
// =====================
const getAllBlogs = async (page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const [blogs, total] = await Promise.all([
        db_1.prisma.cmsBlog.findMany({
            where: { status: 'PUBLISHED' },
            orderBy: { publishedAt: 'desc' },
            skip,
            take: limit,
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                coverImage: true,
                author: true,
                tags: true,
                publishedAt: true,
                viewCount: true,
                category: {
                    select: {
                        name: true,
                        slug: true,
                    },
                },
                subCategory: {
                    select: {
                        name: true,
                        slug: true,
                    },
                },
            },
        }),
        db_1.prisma.cmsBlog.count({
            where: { status: 'PUBLISHED' },
        }),
    ]);
    return {
        blogs,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        },
    };
};
exports.getAllBlogs = getAllBlogs;
// =====================
// GET BLOG BY SLUG
// =====================
const getBlogBySlug = async (slug) => {
    const blog = await db_1.prisma.cmsBlog.findFirst({
        where: {
            slug,
            status: 'PUBLISHED' // ✅ DB index use karega
        },
        select: {
            id: true,
            title: true,
            slug: true,
            excerpt: true,
            content: true,
            coverImage: true,
            author: true,
            tags: true,
            publishedAt: true,
            viewCount: true,
            seoTitle: true,
            seoDescription: true,
            category: {
                select: {
                    name: true,
                    slug: true,
                },
            },
            subCategory: {
                select: {
                    name: true,
                    slug: true,
                },
            },
        },
    });
    if (!blog)
        return null;
    // View count increment
    await db_1.prisma.cmsBlog.update({
        where: { slug },
        data: { viewCount: { increment: 1 } },
    });
    return blog;
};
exports.getBlogBySlug = getBlogBySlug;
