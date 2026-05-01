"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLead = exports.updateLead = exports.getLeadById = exports.getAllLeads = void 0;
const db_1 = require("../../config/db");
const getAllLeads = async (filters) => {
    const where = {};
    if (filters.status)
        where.status = filters.status;
    if (filters.categoryId)
        where.categoryId = filters.categoryId;
    if (filters.productId)
        where.productId = filters.productId;
    return await db_1.prisma.cmsLead.findMany({
        where,
        include: {
            product: { select: { id: true, name: true } },
            category: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: 'desc' }
    });
};
exports.getAllLeads = getAllLeads;
const getLeadById = async (id) => {
    const lead = await db_1.prisma.cmsLead.findUnique({
        where: { id },
        include: {
            product: { select: { id: true, name: true } },
            category: { select: { id: true, name: true } },
        }
    });
    if (!lead)
        throw new Error('Lead not found');
    return lead;
};
exports.getLeadById = getLeadById;
const updateLead = async (id, body) => {
    const lead = await db_1.prisma.cmsLead.findUnique({ where: { id } });
    if (!lead)
        throw new Error('Lead not found');
    return await db_1.prisma.cmsLead.update({
        where: { id },
        data: {
            status: body.status,
            notes: body.notes,
            assignedTo: body.assignedTo,
        }
    });
};
exports.updateLead = updateLead;
const deleteLead = async (id) => {
    const lead = await db_1.prisma.cmsLead.findUnique({ where: { id } });
    if (!lead)
        throw new Error('Lead not found');
    await db_1.prisma.cmsLead.delete({ where: { id } });
    return { message: 'Lead deleted successfully' };
};
exports.deleteLead = deleteLead;
