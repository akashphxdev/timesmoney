"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdatePartner = exports.validateCreatePartner = void 0;
const validateCreatePartner = (body) => {
    const errors = [];
    if (!body.name)
        errors.push('Name is required');
    return errors;
};
exports.validateCreatePartner = validateCreatePartner;
const validateUpdatePartner = (body) => {
    const errors = [];
    if (body.name !== undefined && !body.name)
        errors.push('Name cannot be empty');
    return errors;
};
exports.validateUpdatePartner = validateUpdatePartner;
