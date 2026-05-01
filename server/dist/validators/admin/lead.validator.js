"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateLead = void 0;
const validateUpdateLead = (body) => {
    const errors = [];
    const validStatuses = ['NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'REJECTED'];
    if (body.status && !validStatuses.includes(body.status))
        errors.push('Invalid status');
    return errors;
};
exports.validateUpdateLead = validateUpdateLead;
