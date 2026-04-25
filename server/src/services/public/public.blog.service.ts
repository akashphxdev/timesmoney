import { prisma } from '../../config/db';

// =====================
// GET ALL BLOGS
// =====================
export const getAllBlogs = async (page: number = 1, limit: number = 10) => {
  const skip = (page - 1) * limit;

  const [blogs, total] = await Promise.all([
    prisma.cmsBlog.findMany({
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
    prisma.cmsBlog.count({
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

// =====================
// GET BLOG BY SLUG
// =====================
export const getBlogBySlug = async (slug: string) => {
  const blog = await prisma.cmsBlog.findFirst({
    where: { 
      slug,
      status: 'PUBLISHED'  // ✅ DB index use karega
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

  if (!blog) return null;

  // View count increment
  await prisma.cmsBlog.update({
    where: { slug },
    data: { viewCount: { increment: 1 } },
  });

  return blog;
};