import { prisma } from '../../config/db';
import { deleteImage, deleteMultipleImages, extractImagesFromContent } from '../../utils/imageHelper';

export const getAllBlogs = async () => {
  return await prisma.cmsBlog.findMany({
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

export const getBlogById = async (id: string) => {
  const blog = await prisma.cmsBlog.findUnique({
    where: { id },
    include: {
      category: { select: { id: true, name: true } },
      subCategory: { select: { id: true, name: true } },
    },
  });
  if (!blog) throw new Error('Blog not found');
  return blog;
};

export const createBlog = async (body: any) => {
  const existing = await prisma.cmsBlog.findUnique({ where: { slug: body.slug } });
  if (existing) throw new Error('Slug already exists');

  return await prisma.cmsBlog.create({
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

export const updateBlog = async (id: string, body: any, newCoverImage?: string) => {
  const blog = await prisma.cmsBlog.findUnique({ where: { id } });
  if (!blog) throw new Error('Blog not found');

  if (newCoverImage && blog.coverImage) deleteImage(blog.coverImage);

  if (body.content && blog.content) {
    const oldImages = extractImagesFromContent(blog.content);
    const newImages = extractImagesFromContent(body.content);
    const removedImages = oldImages.filter((img) => !newImages.includes(img));
    deleteMultipleImages(removedImages);
  }

  return await prisma.cmsBlog.update({
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

export const deleteBlog = async (id: string) => {
  const blog = await prisma.cmsBlog.findUnique({ where: { id } });
  if (!blog) throw new Error('Blog not found');

  if (blog.coverImage) deleteImage(blog.coverImage);

  const contentImages = extractImagesFromContent(blog.content);
  deleteMultipleImages(contentImages);

  await prisma.cmsBlog.delete({ where: { id } });
  return { message: 'Blog deleted successfully' };
};