"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lead_controller_1 = require("../../controllers/public/lead.controller");
const router = (0, express_1.Router)();
// POST /api/public/leads/product
router.post('/product', lead_controller_1.submitProductLead);
exports.default = router;
