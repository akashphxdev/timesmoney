"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_1 = require("../middleware/auth.middleware");
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./adminRoutes/auth.routes"));
const admin_routes_1 = __importDefault(require("./adminRoutes/admin.routes"));
const blog_routes_1 = __importDefault(require("./adminRoutes/blog.routes"));
const partner_routes_1 = __importDefault(require("./adminRoutes/partner.routes"));
const category_routes_1 = __importDefault(require("./adminRoutes/category.routes"));
const sub_category_routes_1 = __importDefault(require("./adminRoutes/sub-category.routes"));
const testimonial_routes_1 = __importDefault(require("./adminRoutes/testimonial.routes"));
const product_routes_1 = __importDefault(require("./adminRoutes/product.routes"));
const lead_routes_1 = __importDefault(require("./adminRoutes/lead.routes"));
const public_blog_route_1 = __importDefault(require("./publicRoutes/public.blog.route"));
const dashboard_routes_1 = __importDefault(require("./adminRoutes/dashboard.routes"));
const ad_routes_1 = __importDefault(require("./adminRoutes/ad.routes"));
const ad_event_routes_1 = __importDefault(require("./adminRoutes/ad-event.routes"));
const settings_routes_1 = __importDefault(require("./adminRoutes/settings.routes"));
const header_routes_1 = __importDefault(require("./publicRoutes/header.routes"));
const home_route_1 = __importDefault(require("./publicRoutes/home.route"));
const product_route_1 = __importDefault(require("./publicRoutes/product.route"));
const lead_route_1 = __importDefault(require("./publicRoutes/lead.route"));
const ad_route_1 = __importDefault(require("./publicRoutes/ad.route"));
const settingRoutes_1 = __importDefault(require("./publicRoutes/settingRoutes"));
const router = (0, express_1.Router)();
// Health Check
router.get('/health', (req, res) => {
    console.log('Health check hit!');
    res.json({ success: true, message: 'Timesmoney Server is healthy!' });
});
//All Routes are there 
router.use('/auth', auth_routes_1.default);
router.use('/admins', admin_routes_1.default);
router.use('/blogs', blog_routes_1.default);
router.use('/partners', partner_routes_1.default);
router.use('/categories', category_routes_1.default);
router.use('/sub-categories', sub_category_routes_1.default);
router.use('/testimonials', testimonial_routes_1.default);
router.use('/products', product_routes_1.default);
router.use('/leads', lead_routes_1.default);
router.use('/dashboard', dashboard_routes_1.default);
router.use('/ads', ad_routes_1.default);
router.use('/ad-events', ad_event_routes_1.default);
router.use('/admin/settings', settings_routes_1.default);
router.use(auth_middleware_1.maintenanceCheck); // Apply maintenance mode check to all routes below
// Web/Public Routes
router.use('/web/header-data', header_routes_1.default);
router.use('/web/blogs', public_blog_route_1.default);
router.use('/public/home', home_route_1.default);
router.use('/public/products', product_route_1.default);
router.use('/public/leads', lead_route_1.default);
router.use('/public/ads', ad_route_1.default);
router.use('/public/categories', settings_routes_1.default);
router.use('/public', product_route_1.default);
router.use('/public/settings', settingRoutes_1.default);
exports.default = router;
