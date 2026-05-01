"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateAdmin = exports.validateCreateAdmin = void 0;
const validateCreateAdmin = (body) => {
    const errors = [];
    if (!body.name)
        errors.push('Name is required');
    if (!body.email)
        errors.push('Email is required');
    if (!body.password)
        errors.push('Password is required');
    if (!body.role)
        errors.push('Role is required');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (body.email && !emailRegex.test(body.email)) {
        errors.push('Invalid email format');
    }
    if (body.password && body.password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }
    const validRoles = ['SUPER_ADMIN', 'EDITOR', 'VIEWER'];
    if (body.role && !validRoles.includes(body.role)) {
        errors.push('Invalid role');
    }
    return errors;
};
exports.validateCreateAdmin = validateCreateAdmin;
const validateUpdateAdmin = (body) => {
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (body.email && !emailRegex.test(body.email)) {
        errors.push('Invalid email format');
    }
    if (body.password && body.password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }
    const validRoles = ['SUPER_ADMIN', 'EDITOR', 'VIEWER'];
    if (body.role && !validRoles.includes(body.role)) {
        errors.push('Invalid role');
    }
    return errors;
};
exports.validateUpdateAdmin = validateUpdateAdmin;
