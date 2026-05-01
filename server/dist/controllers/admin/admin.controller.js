"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const admin_service_1 = require("../../services/admin/admin.service");
const admin_validator_1 = require("../../validators/admin/admin.validator");
const getAll = async (req, res) => {
    try {
        const admins = await (0, admin_service_1.getAllAdmins)();
        res.json({ success: true, data: admins });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await (0, admin_service_1.getAdminById)(id);
        res.json({ success: true, data: admin });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getOne = getOne;
const create = async (req, res) => {
    try {
        const errors = (0, admin_validator_1.validateCreateAdmin)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const admin = await (0, admin_service_1.createAdmin)(req.body);
        res.status(201).json({ success: true, message: 'Admin created', data: admin });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const id = req.params.id;
        const errors = (0, admin_validator_1.validateUpdateAdmin)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const admin = await (0, admin_service_1.updateAdmin)(id, req.body);
        res.json({ success: true, message: 'Admin updated', data: admin });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await (0, admin_service_1.deleteAdmin)(id);
        res.json({ success: true, message: result.message });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.remove = remove;
