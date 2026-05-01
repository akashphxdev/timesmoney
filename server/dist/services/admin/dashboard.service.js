"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardStats = void 0;
const db_1 = require("../../config/db");
const getDashboardStats = async () => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [totalProducts, activeProducts, totalBlogs, activeBlogs, totalCategories, activeCategories, totalLeads, totalPartners, activePartners, totalTestimonials, activeTestimonials, totalAds, activeAds, thisMonthLeads, todayLeads,] = await db_1.prisma.$transaction([
        db_1.prisma.cmsProduct.count(),
        db_1.prisma.cmsProduct.count({ where: { status: 'PUBLISHED' } }),
        db_1.prisma.cmsBlog.count(),
        db_1.prisma.cmsBlog.count({ where: { status: 'PUBLISHED' } }),
        db_1.prisma.cmsCategory.count(),
        db_1.prisma.cmsCategory.count({ where: { isActive: true } }),
        db_1.prisma.cmsLead.count(),
        db_1.prisma.cmsPartner.count(),
        db_1.prisma.cmsPartner.count({ where: { isActive: true } }),
        db_1.prisma.cmsTestimonial.count(),
        db_1.prisma.cmsTestimonial.count({ where: { active: true } }),
        db_1.prisma.cmsAd.count(),
        db_1.prisma.cmsAd.count({ where: { active: true } }),
        db_1.prisma.cmsLead.count({ where: { createdAt: { gte: startOfMonth } } }),
        db_1.prisma.cmsLead.count({ where: { createdAt: { gte: startOfDay } } }),
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
exports.getDashboardStats = getDashboardStats;
