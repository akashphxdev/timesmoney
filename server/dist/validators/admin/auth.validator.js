"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = void 0;
const validateLogin = (body) => {
    const errors = [];
    if (!body.email)
        errors.push('Email is required');
    if (!body.password)
        errors.push('Password is required');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (body.email && !emailRegex.test(body.email)) {
        errors.push('Invalid email format');
    }
    return errors;
};
exports.validateLogin = validateLogin;
