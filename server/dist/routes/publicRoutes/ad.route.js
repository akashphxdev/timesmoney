"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/publicRoutes/ad.route.ts
const express_1 = require("express");
const ad_controller_1 = require("../../controllers/public/ad.controller");
const router = (0, express_1.Router)();
router.get('/', ad_controller_1.getAds); // GET /public/ads?page=CALCULATOR&position=TOP
router.post('/track', ad_controller_1.trackEvent); // POST /public/ads/track
exports.default = router;
