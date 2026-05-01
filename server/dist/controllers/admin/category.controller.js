"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const category_validator_1 = require("../../validators/admin/category.validator");
const category_service_1 = require("../../services/admin/category.service");
const getAll = async (_req, res) => {
    try {
        const categories = await (0, category_service_1.getAllCategories)();
        res.json({ success: true, data: categories });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const id = String(req.params.id);
        const category = await (0, category_service_1.getCategoryById)(id);
        res.json({ success: true, data: category });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getOne = getOne;
const create = async (req, res) => {
    try {
        const errors = (0, category_validator_1.validateCreateCategory)(req.body);
        if (errors.length > 0)
            return res.status(400).json({ success: false, errors });
        const imageUrl = req.file ? `/uploads/categories/${req.file.filename}` : undefined;
        const category = await (0, category_service_1.createCategory)({ ...req.body, imageUrl });
        res.status(201).json({ success: true, message: 'Category created', data: category });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const errors = (0, category_validator_1.validateUpdateCategory)(req.body);
        if (errors.length > 0)
            return res.status(400).json({ success: false, errors });
        const id = String(req.params.id);
        const newImageUrl = req.file ? `/uploads/categories/${req.file.filename}` : undefined;
        const category = await (0, category_service_1.updateCategory)(id, req.body, newImageUrl);
        res.json({ success: true, message: 'Category updated', data: category });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const id = String(req.params.id);
        const result = await (0, category_service_1.deleteCategory)(id);
        res.json({ success: true, message: result.message });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.remove = remove;
const toggle = async (req, res) => {
    try {
        const id = String(req.params.id);
        const category = await (0, category_service_1.toggleCategoryStatus)(id);
        res.json({ success: true, message: 'Status updated', data: category });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.toggle = toggle;
