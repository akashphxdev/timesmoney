"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../../controllers/public/category.controller");
const router = (0, express_1.Router)();
// GET /api/categories
router.get('/', category_controller_1.getAllCategoriesHandler);
// GET /api/categories/:slug/sub-categories
router.get('/sub-categories', category_controller_1.getSubCategoriesByCategorySlugHandler);
exports.default = router;
