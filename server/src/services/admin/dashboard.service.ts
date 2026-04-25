import { prisma } from '../../config/db';

export const getDashboardStats = async () => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const [
    totalProducts,
    totalBlogs,
    totalCategories,
    totalLeads,
    totalPartners,
    totalTestimonials,
    thisMonthLeads,
    todayLeads,
  ] = await prisma.$transaction([
    prisma.cmsProduct.count(),
    prisma.cmsBlog.count(),
    prisma.cmsCategory.count(),
    prisma.cmsLead.count(),
    prisma.cmsPartner.count(),
    prisma.cmsTestimonial.count(),
    prisma.cmsLead.count({ where: { createdAt: { gte: startOfMonth } } }),
    prisma.cmsLead.count({ where: { createdAt: { gte: startOfDay } } }),
  ]);

  return {
    totalProducts,
    totalBlogs,
    totalCategories,
    totalLeads,
    totalPartners,
    totalTestimonials,
    thisMonthLeads,
    todayLeads,
  };
};