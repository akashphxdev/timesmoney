"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const public_blog_controller_1 = require("../../controllers/public/public.blog.controller");
const router = (0, express_1.Router)();
router.get('/', public_blog_controller_1.getAllBlogsController); // GET /web/blogs
router.get('/:slug', public_blog_controller_1.getBlogBySlugController); // GET /web/blogs/:slug
exports.default = router;
