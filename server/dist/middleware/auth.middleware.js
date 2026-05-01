"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maintenanceCheck = exports.authorizeRoles = exports.isAuthenticated = void 0;
const db_1 = require("../config/db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../generated/prisma");
// Auth check
const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized - No token provided' });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ success: false, message: 'Unauthorized - Invalid token' });
    }
};
exports.isAuthenticated = isAuthenticated;
// Role check
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.admin) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
        if (!roles.includes(req.admin.role)) {
            return res.status(403).json({ success: false, message: 'Forbidden - Access denied' });
        }
        next();
    };
};
exports.authorizeRoles = authorizeRoles;
const maintenanceCheck = async (req, res, next) => {
    try {
        const settings = await db_1.prisma.cmsSettings.findUnique({
            where: { key: 'global' },
            select: { maintenanceMode: true },
        });
        if (!settings?.maintenanceMode)
            return next();
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(503).json({
                success: false, maintenance: true,
                message: '🚧 Website is currently under maintenance. Please try again later.',
            });
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            if (decoded.role === prisma_1.CmsAdminRole.SUPER_ADMIN) {
                req.admin = decoded;
                return next();
            }
            return res.status(503).json({
                success: false, maintenance: true,
                message: '🚧 Website is currently under maintenance. Please try again later.',
            });
        }
        catch {
            return res.status(503).json({
                success: false, maintenance: true,
                message: '🚧 Website is currently under maintenance. Please try again later.',
            });
        }
    }
    catch {
        next();
    }
};
exports.maintenanceCheck = maintenanceCheck;
