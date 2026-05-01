import { maintenanceCheck } from '../middleware/auth.middleware';
import { Router, Request, Response } from 'express';
import authRoutes from './adminRoutes/auth.routes';
import adminRoutes from './adminRoutes/admin.routes';
import blogRoutes from './adminRoutes/blog.routes';
import partnerRoutes from './adminRoutes/partner.routes';
import categoryRoutes from './adminRoutes/category.routes';
import subCategoryRoutes from './adminRoutes/sub-category.routes';
import testimonialRoutes from './adminRoutes/testimonial.routes';
import productRoutes from './adminRoutes/product.routes';
import leadRoutes from './adminRoutes/lead.routes';
import publicBlogRouter from './publicRoutes/public.blog.route';
import dashboardRouter from './adminRoutes/dashboard.routes';
import adRoutes from './adminRoutes/ad.routes';
import adEventRoutes from './adminRoutes/ad-event.routes';
import settingsRoutes from './adminRoutes/settings.routes';

import headerRoutes from './publicRoutes/header.routes';
import homeRouter from './publicRoutes/home.route';
import publicProductRouter from './publicRoutes/product.route';
import publicLeadRouter from './publicRoutes/lead.route'
import publicAds from './publicRoutes/ad.route'
import PublicsettingRoutes from './publicRoutes/settingRoutes';
const router = Router();

// Health Check
router.get('/health', (req: Request, res: Response) => {
  console.log('Health check hit!');
  res.json({ success: true, message: 'Timesmoney Server is healthy!' });
});

//All Routes are there 
router.use('/auth', authRoutes);
router.use('/admins', adminRoutes);
router.use('/blogs', blogRoutes);
router.use('/partners', partnerRoutes);
router.use('/categories', categoryRoutes);
router.use('/sub-categories', subCategoryRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/products', productRoutes);
router.use('/leads', leadRoutes);
router.use('/dashboard', dashboardRouter);
router.use('/ads', adRoutes);
router.use('/ad-events', adEventRoutes);
router.use('/admin/settings', settingsRoutes);

router.use(maintenanceCheck); // Apply maintenance mode check to all routes below
// Web/Public Routes
router.use('/web/header-data', headerRoutes);
router.use('/web/blogs', publicBlogRouter);
router.use('/public/home', homeRouter);
router.use('/public/products', publicProductRouter);
router.use('/public/leads', publicLeadRouter);
router.use('/public/ads' ,publicAds )
router.use('/public/categories', settingsRoutes);
router.use('/public', publicProductRouter);
router.use('/public/settings', PublicsettingRoutes);


export default router;