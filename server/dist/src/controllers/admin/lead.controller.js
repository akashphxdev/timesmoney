"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getOne = exports.getAll = void 0;
const lead_validator_1 = require("../../validators/admin/lead.validator");
const lead_service_1 = require("../../services/admin/lead.service");
const getAll = async (req, res) => {
    try {
        const { status, categoryId, productId } = req.query;
        const leads = await (0, lead_service_1.getAllLeads)({
            status: status,
            categoryId: categoryId,
            productId: productId,
        });
        res.json({ success: true, data: leads });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const lead = await (0, lead_service_1.getLeadById)(req.params.id);
        res.json({ success: true, data: lead });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getOne = getOne;
const update = async (req, res) => {
    try {
        const errors = (0, lead_validator_1.validateUpdateLead)(req.body);
        if (errors.length > 0)
            return res.status(400).json({ success: false, errors });
        const lead = await (0, lead_service_1.updateLead)(req.params.id, req.body);
        res.json({ success: true, message: 'Lead updated', data: lead });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const result = await (0, lead_service_1.deleteLead)(req.params.id);
        res.json({ success: true, message: result.message });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.remove = remove;
