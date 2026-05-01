"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProductLead = void 0;
const validateProductLead = (body) => {
    const errors = [];
    if (!body.name || body.name.trim() === '') {
        errors.push({ field: 'name', message: 'Name is required' });
    }
    else if (body.name.trim().length < 2) {
        errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
    }
    if (!body.phone || body.phone.trim() === '') {
        errors.push({ field: 'phone', message: 'Phone number is required' });
    }
    else if (!/^[6-9]\d{9}$/.test(body.phone.trim())) {
        errors.push({ field: 'phone', message: 'Enter a valid 10-digit Indian mobile number' });
    }
    if (body.email && body.email.trim() !== '') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
            errors.push({ field: 'email', message: 'Enter a valid email address' });
        }
    }
    if (!body.productId || body.productId.trim() === '') {
        errors.push({ field: 'productId', message: 'Product ID is required' });
    }
    return errors;
};
exports.validateProductLead = validateProductLead;
