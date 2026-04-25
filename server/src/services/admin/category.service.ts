import { prisma } from '../../config/db';
import { deleteImage } from '../../utils/imageHelper';

export const getAllCategories = async () => {
  return await prisma.cmsCategory.findMany({
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { subCategories: true } } },
  });
};

export const getCategoryById = async (id: string) => {
  const category = await prisma.cmsCategory.findUnique({
    where: { id },
    include: { _count: { select: { subCategories: true } } },
  });
  if (!category) throw new Error('Category not found');
  return category;
};

export const createCategory = async (body: {
  name: string;
  slug: string;
  imageUrl?: string;
  isActive?: boolean;
}) => {
  const existing = await prisma.cmsCategory.findUnique({ where: { slug: body.slug } });
  if (existing) throw new Error('Slug already exists');

  return await prisma.cmsCategory.create({
    data: {
      name: body.name,
      slug: body.slug,
      imageUrl: body.imageUrl,
      isActive: body.isActive !== undefined ? Boolean(body.isActive) : true,
    },
  });
};

export const updateCategory = async (id: string, body: any, newImageUrl?: string) => {
  const category = await prisma.cmsCategory.findUnique({ where: { id } });
  if (!category) throw new Error('Category not found');

  if (body.slug && body.slug !== category.slug) {
    const existing = await prisma.cmsCategory.findUnique({ where: { slug: body.slug } });
    if (existing) throw new Error('Slug already exists');
  }

  if (newImageUrl && category.imageUrl) deleteImage(category.imageUrl);

  return await prisma.cmsCategory.update({
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

export const deleteCategory = async (id: string) => {
  const category = await prisma.cmsCategory.findUnique({
    where: { id },
    include: { _count: { select: { subCategories: true } } },
  });
  if (!category) throw new Error('Category not found');
  if (category._count.subCategories > 0)
    throw new Error('Pehle is category ki sub-categories delete karo');

  if (category.imageUrl) deleteImage(category.imageUrl);
  await prisma.cmsCategory.delete({ where: { id } });
  return { message: 'Category deleted successfully' };
};

export const toggleCategoryStatus = async (id: string) => {
  const category = await prisma.cmsCategory.findUnique({ where: { id } });
  if (!category) throw new Error('Category not found');

  return await prisma.cmsCategory.update({
    where: { id },
    data: { isActive: !category.isActive },
  });
};