"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/adminRoutes/ad-event.routes.ts
const express_1 = require("express");
const ad_event_controller_1 = require("../../controllers/admin/ad-event.controller");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.get('/stats', auth_middleware_1.isAuthenticated, ad_event_controller_1.getStats); // Overall stats
router.get('/ads-list', auth_middleware_1.isAuthenticated, ad_event_controller_1.getAdsForFilter); // Ads dropdown filter
router.get('/', auth_middleware_1.isAuthenticated, ad_event_controller_1.getAll); // All events (paginated + filtered)
router.get('/:adId', auth_middleware_1.isAuthenticated, ad_event_controller_1.getByAdId); // Events by specific ad
exports.default = router;
