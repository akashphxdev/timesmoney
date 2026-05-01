"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateProduct = exports.validateCreateProduct = void 0;
const validateCreateProduct = (body) => {
    const errors = [];
    if (!body.name)
        errors.push('Name is required');
    if (!body.slug)
        errors.push('Slug is required');
    if (!body.categoryId)
        errors.push('Category is required');
    if (!body.shortDescription)
        errors.push('shortDescription is required');
    if (!body.description)
        errors.push('Description is required');
    if (!body.provider)
        errors.push('Provider is required');
    if (!body.applyUrl)
        errors.push('Apply URL is required');
    if (!body.seoTitle)
        errors.push('SEO Title is required');
    if (!body.seoDescription)
        errors.push('SEO Description is required');
    const validStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'];
    if (body.status && !validStatuses.includes(body.status))
        errors.push('Invalid status');
    return errors;
};
exports.validateCreateProduct = validateCreateProduct;
const validateUpdateProduct = (body) => {
    const errors = [];
    const validStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'];
    if (body.status && !validStatuses.includes(body.status))
        errors.push('Invalid status');
    return errors;
};
exports.validateUpdateProduct = validateUpdateProduct;
