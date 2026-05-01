"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogBySlugController = exports.getAllBlogsController = void 0;
const public_blog_service_1 = require("../../services/public/public.blog.service");
// =====================
// GET ALL BLOGS
// =====================
const getAllBlogsController = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const data = await (0, public_blog_service_1.getAllBlogs)(page, limit);
        res.json({ success: true, data });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAllBlogsController = getAllBlogsController;
// =====================
// GET BLOG BY SLUG
// =====================
const getBlogBySlugController = async (req, res) => {
    try {
        const slug = req.params.slug; // ✅ type cast karo
        const blog = await (0, public_blog_service_1.getBlogBySlug)(slug);
        if (!blog) {
            res.status(404).json({ success: false, message: 'Blog not found' });
            return;
        }
        res.json({ success: true, data: blog });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getBlogBySlugController = getBlogBySlugController;
