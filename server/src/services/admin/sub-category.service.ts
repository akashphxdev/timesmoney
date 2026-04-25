import { prisma } from '../../config/db';
import { deleteImage } from '../../utils/imageHelper';

export const getAllSubCategories = async () => {
  return await prisma.cmsSubCategory.findMany({
    orderBy: { createdAt: 'desc' },
    include: { category: { select: { id: true, name: true } } },
  });
};

export const getSubCategoryById = async (id: string) => {
  const sub = await prisma.cmsSubCategory.findUnique({
    where: { id },
    include: { category: { select: { id: true, name: true } } },
  });
  if (!sub) throw new Error('Sub-category not found');
  return sub;
};

export const createSubCategory = async (body: {
  name: string;
  slug: string;
  categoryId: string;
  imageUrl?: string;
  isActive?: boolean;
}) => {
  const existing = await prisma.cmsSubCategory.findUnique({ where: { slug: body.slug } });
  if (existing) throw new Error('Slug already exists');

  const category = await prisma.cmsCategory.findUnique({ where: { id: body.categoryId } });
  if (!category) throw new Error('Category not found');

  return await prisma.cmsSubCategory.create({
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

export const updateSubCategory = async (id: string, body: any, newImageUrl?: string) => {
  const sub = await prisma.cmsSubCategory.findUnique({ where: { id } });
  if (!sub) throw new Error('Sub-category not found');

  if (body.slug && body.slug !== sub.slug) {
    const existing = await prisma.cmsSubCategory.findUnique({ where: { slug: body.slug } });
    if (existing) throw new Error('Slug already exists');
  }

  if (body.categoryId) {
    const category = await prisma.cmsCategory.findUnique({ where: { id: body.categoryId } });
    if (!category) throw new Error('Category not found');
  }

  if (newImageUrl && sub.imageUrl) deleteImage(sub.imageUrl);

  return await prisma.cmsSubCategory.update({
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

export const deleteSubCategory = async (id: string) => {
  const sub = await prisma.cmsSubCategory.findUnique({ where: { id } });
  if (!sub) throw new Error('Sub-category not found');

  if (sub.imageUrl) deleteImage(sub.imageUrl);
  await prisma.cmsSubCategory.delete({ where: { id } });
  return { message: 'Sub-category deleted successfully' };
};

export const toggleSubCategoryStatus = async (id: string) => {
  const sub = await prisma.cmsSubCategory.findUnique({ where: { id } });
  if (!sub) throw new Error('Sub-category not found');

  return await prisma.cmsSubCategory.update({
    where: { id },
    data: { isActive: !sub.isActive },
  });
};