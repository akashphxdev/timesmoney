"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateCategory = exports.validateCreateCategory = void 0;
const validateCreateCategory = (body) => {
    const errors = [];
    if (!body.name)
        errors.push('Name is required');
    if (!body.slug)
        errors.push('Slug is required');
    return errors;
};
exports.validateCreateCategory = validateCreateCategory;
const validateUpdateCategory = (body) => {
    const errors = [];
    if (body.name !== undefined && !body.name)
        errors.push('Name cannot be empty');
    if (body.slug !== undefined && !body.slug)
        errors.push('Slug cannot be empty');
    return errors;
};
exports.validateUpdateCategory = validateUpdateCategory;
