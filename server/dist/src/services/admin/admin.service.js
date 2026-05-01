"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmin = exports.updateAdmin = exports.createAdmin = exports.getAdminById = exports.getAllAdmins = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("../../config/db");
// Get all admins
const getAllAdmins = async () => {
    return await db_1.prisma.cmsAdmin.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isActive: true,
            lastLoginAt: true,
            createdAt: true,
        },
        orderBy: { createdAt: 'desc' }
    });
};
exports.getAllAdmins = getAllAdmins;
// Get single admin
const getAdminById = async (id) => {
    const admin = await db_1.prisma.cmsAdmin.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isActive: true,
            lastLoginAt: true,
            createdAt: true,
        }
    });
    if (!admin)
        throw new Error('Admin not found');
    return admin;
};
exports.getAdminById = getAdminById;
// Create admin
const createAdmin = async (body) => {
    const existing = await db_1.prisma.cmsAdmin.findUnique({
        where: { email: body.email }
    });
    if (existing)
        throw new Error('Email already exists');
    const passwordHash = await bcryptjs_1.default.hash(body.password, 10);
    return await db_1.prisma.cmsAdmin.create({
        data: {
            name: body.name,
            email: body.email,
            passwordHash,
            role: body.role,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isActive: true,
            createdAt: true,
        }
    });
};
exports.createAdmin = createAdmin;
// Update admin
const updateAdmin = async (id, body) => {
    const admin = await db_1.prisma.cmsAdmin.findUnique({ where: { id } });
    if (!admin)
        throw new Error('Admin not found');
    const data = {};
    if (body.name)
        data.name = body.name;
    if (body.email)
        data.email = body.email;
    if (body.role)
        data.role = body.role;
    if (body.isActive !== undefined)
        data.isActive = body.isActive;
    if (body.password)
        data.passwordHash = await bcryptjs_1.default.hash(body.password, 10);
    return await db_1.prisma.cmsAdmin.update({
        where: { id },
        data,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isActive: true,
            createdAt: true,
        }
    });
};
exports.updateAdmin = updateAdmin;
// Delete admin
const deleteAdmin = async (id) => {
    const admin = await db_1.prisma.cmsAdmin.findUnique({ where: { id } });
    if (!admin)
        throw new Error('Admin not found');
    await db_1.prisma.cmsAdmin.delete({ where: { id } });
    return { message: 'Admin deleted successfully' };
};
exports.deleteAdmin = deleteAdmin;
