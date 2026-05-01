"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitProductLead = void 0;
const lead_service_1 = require("../../services/public/lead.service");
const lead_validator_1 = require("../../validators/public/lead.validator");
// ==================== SUBMIT PRODUCT LEAD ====================
const submitProductLead = async (req, res) => {
    try {
        const errors = (0, lead_validator_1.validateProductLead)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const { name, phone, email, productId, customData } = req.body;
        const lead = await (0, lead_service_1.createProductLead)({ name, phone, email, productId, customData });
        res.status(201).json({
            success: true,
            message: 'Thank you! We will contact you soon.',
            data: lead,
        });
    }
    catch (error) {
        const err = error;
        const statusCode = err.statusCode ?? 500;
        res.status(statusCode).json({ success: false, message: err.message });
    }
};
exports.submitProductLead = submitProductLead;
