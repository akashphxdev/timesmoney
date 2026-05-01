"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../../config/db"));
const loginAdmin = async (email, password) => {
    const admin = await db_1.default.cmsAdmin.findUnique({
        where: { email }
    });
    if (!admin)
        throw new Error('Invalid email or password');
    if (!admin.isActive)
        throw new Error('Account is disabled');
    const isMatch = await bcryptjs_1.default.compare(password, admin.passwordHash);
    if (!isMatch)
        throw new Error('Invalid email or password');
    await db_1.default.cmsAdmin.update({
        where: { id: admin.id },
        data: { lastLoginAt: new Date() }
    });
    const token = jsonwebtoken_1.default.sign({ id: admin.id, email: admin.email, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return {
        token,
        admin: {
            id: admin.id,
            name: admin.name,
            email: admin.email,
            role: admin.role
        }
    };
};
exports.loginAdmin = loginAdmin;
