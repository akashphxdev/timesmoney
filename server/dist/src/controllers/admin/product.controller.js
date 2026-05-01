"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const product_validator_1 = require("../../validators/admin/product.validator");
const product_service_1 = require("../../services/admin/product.service");
const getAll = async (_req, res) => {
    try {
        const products = await (0, product_service_1.getAllProducts)();
        res.json({ success: true, data: products });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const product = await (0, product_service_1.getProductById)(req.params.id);
        res.json({ success: true, data: product });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getOne = getOne;
const create = async (req, res) => {
    try {
        const errors = (0, product_validator_1.validateCreateProduct)(req.body);
        if (errors.length > 0)
            return res.status(400).json({ success: false, errors });
        const files = req.files;
        const product = await (0, product_service_1.createProduct)(req.body, files);
        res.status(201).json({ success: true, message: 'Product created', data: product });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const errors = (0, product_validator_1.validateUpdateProduct)(req.body);
        if (errors.length > 0)
            return res.status(400).json({ success: false, errors });
        const files = req.files;
        const product = await (0, product_service_1.updateProduct)(req.params.id, req.body, files);
        res.json({ success: true, message: 'Product updated', data: product });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const result = await (0, product_service_1.deleteProduct)(req.params.id);
        res.json({ success: true, message: result.message });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.remove = remove;
