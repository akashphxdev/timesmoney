"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const ad_validator_1 = require("../../validators/admin/ad.validator");
const ad_service_1 = require("../../services/admin/ad.service");
const getAll = async (_req, res) => {
    try {
        const ads = await (0, ad_service_1.getAllAds)();
        res.json({ success: true, data: ads });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const ad = await (0, ad_service_1.getAdById)(id);
        res.json({ success: true, data: ad });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getOne = getOne;
// src/controllers/admin/ad.controller.ts
const create = async (req, res) => {
    try {
        // FormData mein arrays string ya array aa sakte hain — normalize karo
        if (req.body.pages && !Array.isArray(req.body.pages)) {
            req.body.pages = [req.body.pages];
        }
        if (req.body.positions && !Array.isArray(req.body.positions)) {
            req.body.positions = [req.body.positions];
        }
        const errors = (0, ad_validator_1.validateCreateAd)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Ad image is required' });
        }
        const image = `/uploads/ads/${req.file.filename}`;
        const ad = await (0, ad_service_1.createAd)({ ...req.body, image });
        res.status(201).json({ success: true, message: 'Ad created', data: ad });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        if (req.body.pages && !Array.isArray(req.body.pages)) {
            req.body.pages = [req.body.pages];
        }
        if (req.body.positions && !Array.isArray(req.body.positions)) {
            req.body.positions = [req.body.positions];
        }
        const id = req.params.id;
        const errors = (0, ad_validator_1.validateUpdateAd)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const newImage = req.file ? `/uploads/ads/${req.file.filename}` : undefined;
        const ad = await (0, ad_service_1.updateAd)(id, req.body, newImage);
        res.json({ success: true, message: 'Ad updated', data: ad });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await (0, ad_service_1.deleteAd)(id);
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
        const id = req.params.id;
        const ad = await (0, ad_service_1.toggleAdStatus)(id);
        res.json({ success: true, message: `Ad ${ad.active ? 'activated' : 'deactivated'}`, data: ad });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.toggle = toggle;
