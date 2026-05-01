import { prisma } from '../../config/db';

// Saari active categories (with sub-categories)
export const getAllCategories = async () => {
  return prisma.cmsCategory.findMany({
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

// Ek category by slug + uski sub-categories
export const getSubCategoriesByCategorySlug = async (slug: string) => {
  return prisma.cmsCategory.findUnique({
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