"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateSubCategory = exports.validateCreateSubCategory = void 0;
const validateCreateSubCategory = (body) => {
    const errors = [];
    if (!body.name)
        errors.push('Name is required');
    if (!body.slug)
        errors.push('Slug is required');
    if (!body.categoryId)
        errors.push('Category is required');
    return errors;
};
exports.validateCreateSubCategory = validateCreateSubCategory;
const validateUpdateSubCategory = (body) => {
    const errors = [];
    if (body.name !== undefined && !body.name)
        errors.push('Name cannot be empty');
    if (body.slug !== undefined && !body.slug)
        errors.push('Slug cannot be empty');
    return errors;
};
exports.validateUpdateSubCategory = validateUpdateSubCategory;
