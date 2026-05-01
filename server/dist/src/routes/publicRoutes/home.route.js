"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../../controllers/public/home.controller");
const router = (0, express_1.Router)();
// GET  /api/public/home       → saara home page data
router.get('/', home_controller_1.homeData);
// POST /api/public/home/lead  → hero form lead submit
router.post('/lead', home_controller_1.submitHeroLead);
router.patch('/lead/:id', home_controller_1.updateLeadEmail); // ← naya
exports.default = router;
