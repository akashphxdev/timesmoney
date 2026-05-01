"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeadEmail = exports.submitHeroLead = exports.homeData = void 0;
const home_service_1 = require("../../services/public/home.service");
const home_validator_1 = require("../../validators/public/home.validator");
const notification_service_1 = require("../../services/public/notification.service");
// ==================== GET HOME DATA ====================
const homeData = async (_req, res) => {
    try {
        const data = await (0, home_service_1.getHomeData)();
        res.json({ success: true, data });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.homeData = homeData;
// ==================== CREATE HERO LEAD ====================
const submitHeroLead = async (req, res) => {
    try {
        const errors = (0, home_validator_1.validateHeroLead)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const { name, phone, categoryId, subCategoryId, employmentType } = req.body;
        const lead = await (0, home_service_1.createHeroLead)({ name, phone, categoryId, subCategoryId, employmentType });
        // ── WhatsApp message Step 1 pe (non-blocking) ──
        (0, notification_service_1.sendWhatsAppMessage)({
            phone,
            name,
            subCategoryName: lead.subCategoryName ?? lead.categoryName ?? undefined,
        }).catch((err) => console.error('[WhatsApp] Background error:', err));
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
exports.submitHeroLead = submitHeroLead;
// ==================== UPDATE LEAD EMAIL ====================
const updateLeadEmail = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({
                success: false,
                errors: [{ field: 'email', message: 'Valid email is required' }],
            });
        }
        const lead = await (0, home_service_1.updateLeadEmail)({ leadId: String(id), email });
        // ── Email Step 2 pe (non-blocking) ──
        (0, notification_service_1.sendLeadEmail)({
            email,
            name: lead.name ?? 'Valued Customer',
            subCategoryName: lead.subCategoryName ?? lead.categoryName ?? undefined,
        }).catch((err) => console.error('[Email] Background error:', err));
        res.json({ success: true, data: lead });
    }
    catch (error) {
        const err = error;
        res.status(err.statusCode ?? 500).json({ success: false, message: err.message });
    }
};
exports.updateLeadEmail = updateLeadEmail;
