// import { prisma } from '../../config/db';

// export const getHeaderData = async () => {
//   const [categories, blogs] = await Promise.all([
//     prisma.cmsCategory.findMany({
//       where: { isActive: true },
//       orderBy: { createdAt: 'desc' },
//       select: {
//         id: true,
//         name: true,
//         slug: true,
//         subCategories: {
//           where: { isActive: true },
//           orderBy: { createdAt: 'desc' },
//           select: {
//             id: true,
//             name: true,
//             slug: true,
//           },
//         },
//       },
//     }),
//     prisma.cmsBlog.findMany({
//       where: { status: 'PUBLISHED' },
//       orderBy: { publishedAt: 'desc' },
//       select: {
//         id: true,
//         title: true,
//         slug: true,
//       },
//     }),
//   ]);

//   return { categories, blogs };
// };


import { prisma } from '../../config/db';

export const getHeaderData = async () => {
  const [categories, blogs, settings] = await Promise.all([
    prisma.cmsCategory.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        slug: true,
        subCategories: {
          where: { isActive: true },
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    }),
    prisma.cmsBlog.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
      },
    }),
    prisma.cmsSettings.findFirst({
      select: {
        whatsappNo: true,
        callingNo: true,
        supportEmail: true,
        instagramUrl: true,
        linkedinUrl: true,
        autoMailEnabled: true,
        autoWhatsappEnabled: true,
        maintenanceMode: true,
      },
    }),
  ]);

  return { categories, blogs, settings };
};