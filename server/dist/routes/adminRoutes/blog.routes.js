"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_controller_1 = require("../../controllers/admin/blog.controller");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const upload_middleware_1 = require("../../middleware/upload.middleware");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.isAuthenticated, blog_controller_1.getAll);
router.get('/:id', auth_middleware_1.isAuthenticated, blog_controller_1.getOne);
router.post('/', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.authorizeRoles)('SUPER_ADMIN', 'EDITOR'), upload_middleware_1.uploadBlogCover, blog_controller_1.create);
router.patch('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.authorizeRoles)('SUPER_ADMIN', 'EDITOR'), upload_middleware_1.uploadBlogCover, blog_controller_1.update);
router.delete('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.authorizeRoles)('SUPER_ADMIN'), blog_controller_1.remove);
// Content image routes
router.post('/upload/image', auth_middleware_1.isAuthenticated, upload_middleware_1.uploadContent, blog_controller_1.uploadImage);
router.delete('/upload/image', auth_middleware_1.isAuthenticated, blog_controller_1.deleteContentImage);
exports.default = router;
