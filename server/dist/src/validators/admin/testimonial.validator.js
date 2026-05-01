"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateTestimonial = exports.validateCreateTestimonial = void 0;
const validateCreateTestimonial = (body) => {
    const errors = [];
    if (!body.name)
        errors.push('Name is required');
    if (!body.content)
        errors.push('Content is required');
    if (body.rating !== undefined) {
        const r = Number(body.rating);
        if (isNaN(r) || r < 1 || r > 5)
            errors.push('Rating must be between 1 and 5');
    }
    return errors;
};
exports.validateCreateTestimonial = validateCreateTestimonial;
const validateUpdateTestimonial = (body) => {
    const errors = [];
    if (body.name !== undefined && !body.name)
        errors.push('Name cannot be empty');
    if (body.content !== undefined && !body.content)
        errors.push('Content cannot be empty');
    if (body.rating !== undefined) {
        const r = Number(body.rating);
        if (isNaN(r) || r < 1 || r > 5)
            errors.push('Rating must be between 1 and 5');
    }
    return errors;
};
exports.validateUpdateTestimonial = validateUpdateTestimonial;
