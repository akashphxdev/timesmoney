"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_service_1 = require("../../services/admin/auth.service");
const auth_validator_1 = require("../../validators/admin/auth.validator");
const login = async (req, res) => {
    try {
        const errors = (0, auth_validator_1.validateLogin)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const { email, password } = req.body;
        const data = await (0, auth_service_1.loginAdmin)(email, password);
        res.json({ success: true, message: 'Login successful', data });
    }
    catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
};
exports.login = login;
