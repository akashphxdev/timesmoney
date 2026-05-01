"use strict";
// // Path: server/src/controllers/public/product.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCompareProducts = exports.fetchProductBySlug = exports.fetchSubCategoryBySlug = exports.fetchCategoryBySlug = exports.fetchAllProducts = void 0;
const product_service_1 = require("../../services/public/product.service");
const fetchAllProducts = async (req, res) => {
    try {
        const categorySlug = req.query.category;
        const subCategorySlug = req.query.subCategory;
        const products = await (0, product_service_1.getAllProducts)(categorySlug, subCategorySlug);
        res.json({ success: true, data: products });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.fetchAllProducts = fetchAllProducts;
const fetchCategoryBySlug = async (req, res) => {
    try {
        const category = await (0, product_service_1.getCategoryBySlug)(req.params.slug);
        if (!category)
            return res.status(404).json({ success: false, message: 'Category not found' });
        res.json({ success: true, data: category });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.fetchCategoryBySlug = fetchCategoryBySlug;
const fetchSubCategoryBySlug = async (req, res) => {
    try {
        const subCategory = await (0, product_service_1.getSubCategoryBySlug)(req.params.slug);
        if (!subCategory)
            return res.status(404).json({ success: false, message: 'Sub-category not found' });
        res.json({ success: true, data: subCategory });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.fetchSubCategoryBySlug = fetchSubCategoryBySlug;
const fetchProductBySlug = async (req, res) => {
    try {
        const product = await (0, product_service_1.getProductBySlug)(req.params.slug);
        res.json({ success: true, data: product });
    }
    catch (error) {
        const err = error;
        res.status(err.statusCode ?? 500).json({ success: false, message: err.message });
    }
};
exports.fetchProductBySlug = fetchProductBySlug;
// ✅ NEW
const fetchCompareProducts = async (req, res) => {
    try {
        const data = await (0, product_service_1.getCompareProducts)();
        res.json({ success: true, data });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.fetchCompareProducts = fetchCompareProducts;
