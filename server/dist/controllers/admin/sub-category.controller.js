"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const sub_category_validator_1 = require("../../validators/admin/sub-category.validator");
const sub_category_service_1 = require("../../services/admin/sub-category.service");
const getAll = async (_req, res) => {
    try {
        const subs = await (0, sub_category_service_1.getAllSubCategories)();
        res.json({ success: true, data: subs });
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
        const sub = await (0, sub_category_service_1.getSubCategoryById)(id);
        res.json({ success: true, data: sub });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getOne = getOne;
const create = async (req, res) => {
    try {
        const errors = (0, sub_category_validator_1.validateCreateSubCategory)(req.body);
        if (errors.length > 0)
            return res.status(400).json({ success: false, errors });
        const imageUrl = req.file ? `/uploads/sub-categories/${req.file.filename}` : undefined;
        const sub = await (0, sub_category_service_1.createSubCategory)({ ...req.body, imageUrl });
        res.status(201).json({ success: true, message: 'Sub-category created', data: sub });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const errors = (0, sub_category_validator_1.validateUpdateSubCategory)(req.body);
        if (errors.length > 0)
            return res.status(400).json({ success: false, errors });
        const id = String(req.params.id);
        const newImageUrl = req.file ? `/uploads/sub-categories/${req.file.filename}` : undefined;
        const sub = await (0, sub_category_service_1.updateSubCategory)(id, req.body, newImageUrl);
        res.json({ success: true, message: 'Sub-category updated', data: sub });
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
        const result = await (0, sub_category_service_1.deleteSubCategory)(id);
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
        const sub = await (0, sub_category_service_1.toggleSubCategoryStatus)(id);
        res.json({ success: true, message: 'Status updated', data: sub });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.toggle = toggle;
