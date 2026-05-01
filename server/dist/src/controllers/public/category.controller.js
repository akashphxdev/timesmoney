"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubCategoriesByCategorySlugHandler = exports.getAllCategoriesHandler = void 0;
const category_service_1 = require("../../services/public/category.service");
// GET /api/categories
const getAllCategoriesHandler = async (req, res) => {
    try {
        const categories = await (0, category_service_1.getAllCategories)();
        return res.status(200).json({
            success: true,
            count: categories.length,
            data: categories,
        });
    }
    catch (error) {
        console.error('getAllCategories error:', error);
        return res.status(500).json({
            success: false,
            message: 'Categories fetch nahi hui',
        });
    }
};
exports.getAllCategoriesHandler = getAllCategoriesHandler;
// GET /api/categories/:slug/sub-categories
const getSubCategoriesByCategorySlugHandler = async (req, res) => {
    try {
        const { slug } = req.query;
        if (!slug) {
            return res.status(400).json({
                success: false,
                message: 'Slug required hai',
            });
        }
        const category = await (0, category_service_1.getSubCategoriesByCategorySlug)(slug);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category nahi mili',
            });
        }
        return res.status(200).json({
            success: true,
            data: category,
        });
    }
    catch (error) {
        console.error('getSubCategoriesByCategorySlug error:', error);
        return res.status(500).json({
            success: false,
            message: 'Sub-categories fetch nahi hui',
        });
    }
};
exports.getSubCategoriesByCategorySlugHandler = getSubCategoriesByCategorySlugHandler;
