"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleFeatured = exports.toggleActive = exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const testimonial_validator_1 = require("../../validators/admin/testimonial.validator");
const testimonial_service_1 = require("../../services/admin/testimonial.service");
const getAll = async (_req, res) => {
    try {
        const testimonials = await (0, testimonial_service_1.getAllTestimonials)();
        res.json({ success: true, data: testimonials });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const testimonial = await (0, testimonial_service_1.getTestimonialById)(req.params.id);
        res.json({ success: true, data: testimonial });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getOne = getOne;
const create = async (req, res) => {
    try {
        const errors = (0, testimonial_validator_1.validateCreateTestimonial)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const avatar = req.file ? `/uploads/testimonials/${req.file.filename}` : undefined;
        const testimonial = await (0, testimonial_service_1.createTestimonial)({ ...req.body, avatar });
        res.status(201).json({ success: true, message: 'Testimonial created', data: testimonial });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const errors = (0, testimonial_validator_1.validateUpdateTestimonial)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const newAvatarUrl = req.file ? `/uploads/testimonials/${req.file.filename}` : undefined;
        const testimonial = await (0, testimonial_service_1.updateTestimonial)(req.params.id, req.body, newAvatarUrl);
        res.json({ success: true, message: 'Testimonial updated', data: testimonial });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const result = await (0, testimonial_service_1.deleteTestimonial)(req.params.id);
        res.json({ success: true, message: result.message });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.remove = remove;
const toggleActive = async (req, res) => {
    try {
        const testimonial = await (0, testimonial_service_1.toggleTestimonialActive)(req.params.id);
        res.json({ success: true, message: 'Active status updated', data: testimonial });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.toggleActive = toggleActive;
const toggleFeatured = async (req, res) => {
    try {
        const testimonial = await (0, testimonial_service_1.toggleTestimonialFeatured)(req.params.id);
        res.json({ success: true, message: 'Featured status updated', data: testimonial });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.toggleFeatured = toggleFeatured;
