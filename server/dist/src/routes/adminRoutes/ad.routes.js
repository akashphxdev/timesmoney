"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/adminRoutes/ad.routes.ts
const express_1 = require("express");
const ad_controller_1 = require("../../controllers/admin/ad.controller");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const upload_middleware_1 = require("../../middleware/upload.middleware");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.isAuthenticated, ad_controller_1.getAll);
router.get('/:id', auth_middleware_1.isAuthenticated, ad_controller_1.getOne);
router.post('/', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.authorizeRoles)('SUPER_ADMIN', 'EDITOR'), upload_middleware_1.uploadAdImage, ad_controller_1.create);
router.patch('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.authorizeRoles)('SUPER_ADMIN', 'EDITOR'), upload_middleware_1.uploadAdImage, ad_controller_1.update);
router.patch('/:id/toggle', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.authorizeRoles)('SUPER_ADMIN', 'EDITOR'), ad_controller_1.toggle);
router.delete('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.authorizeRoles)('SUPER_ADMIN'), ad_controller_1.remove);
exports.default = router;
