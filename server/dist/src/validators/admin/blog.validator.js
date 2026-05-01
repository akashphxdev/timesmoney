"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateBlog = exports.validateCreateBlog = void 0;
// src/validators/admin/blog.validator.ts
const validateCreateBlog = (body) => {
    const errors = [];
    if (!body.title)
        errors.push('Title is required');
    if (!body.slug)
        errors.push('Slug is required');
    if (!body.status)
        errors.push('Status is required');
    if (!body.author)
        errors.push('Author is required');
    if (!body.content)
        errors.push('Content is required');
    const validStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'];
    if (body.status && !validStatuses.includes(body.status)) {
        errors.push('Invalid status');
    }
    return errors;
};
exports.validateCreateBlog = validateCreateBlog;
const validateUpdateBlog = (body) => {
    const errors = [];
    const validStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'];
    if (body.status && !validStatuses.includes(body.status)) {
        errors.push('Invalid status');
    }
    return errors;
};
exports.validateUpdateBlog = validateUpdateBlog;
