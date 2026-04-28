import { prisma } from '../../config/db';

export const getDashboardStats = async () => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const [
    totalProducts, activeProducts,
    totalBlogs, activeBlogs,
    totalCategories, activeCategories,
    totalLeads,
    totalPartners, activePartners,
    totalTestimonials, activeTestimonials,
    totalAds, activeAds,
    thisMonthLeads,
    todayLeads,
  ] = await prisma.$transaction([
    prisma.cmsProduct.count(),
    prisma.cmsProduct.count({ where: { status: 'PUBLISHED' } }),

    prisma.cmsBlog.count(),
    prisma.cmsBlog.count({ where: { status: 'PUBLISHED' } }),

    prisma.cmsCategory.count(),
    prisma.cmsCategory.count({ where: { isActive: true } }),

    prisma.cmsLead.count(),

    prisma.cmsPartner.count(),
    prisma.cmsPartner.count({ where: { isActive: true } }),

    prisma.cmsTestimonial.count(),
    prisma.cmsTestimonial.count({ where: { active: true } }),

    prisma.cmsAd.count(),
    prisma.cmsAd.count({ where: { active: true } }),

    prisma.cmsLead.count({ where: { createdAt: { gte: startOfMonth } } }),
    prisma.cmsLead.count({ where: { createdAt: { gte: startOfDay } } }),
  ]);

  return {
    totalProducts, activeProducts,
    totalBlogs, activeBlogs,
    totalCategories, activeCategories,
    totalLeads,
    totalPartners, activePartners,
    totalTestimonials, activeTestimonials,
    totalAds, activeAds,
    thisMonthLeads,
    todayLeads,
  };
};