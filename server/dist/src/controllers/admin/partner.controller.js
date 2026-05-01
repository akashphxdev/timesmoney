"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const partner_validator_1 = require("../../validators/admin/partner.validator");
const partner_service_1 = require("../../services/admin/partner.service");
const getAll = async (_req, res) => {
    try {
        const partners = await (0, partner_service_1.getAllPartners)();
        res.json({ success: true, data: partners });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const partner = await (0, partner_service_1.getPartnerById)(req.params.id);
        res.json({ success: true, data: partner });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getOne = getOne;
const create = async (req, res) => {
    try {
        const errors = (0, partner_validator_1.validateCreatePartner)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const imageUrl = req.file ? `/uploads/partners/${req.file.filename}` : undefined;
        const partner = await (0, partner_service_1.createPartner)({ ...req.body, imageUrl });
        res.status(201).json({ success: true, message: 'Partner created', data: partner });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const errors = (0, partner_validator_1.validateUpdatePartner)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const newImageUrl = req.file ? `/uploads/partners/${req.file.filename}` : undefined;
        const partner = await (0, partner_service_1.updatePartner)(req.params.id, req.body, newImageUrl);
        res.json({ success: true, message: 'Partner updated', data: partner });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const result = await (0, partner_service_1.deletePartner)(req.params.id);
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
        const partner = await (0, partner_service_1.togglePartnerStatus)(req.params.id);
        res.json({ success: true, message: 'Status updated', data: partner });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.toggle = toggle;
