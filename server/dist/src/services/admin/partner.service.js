"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.togglePartnerStatus = exports.deletePartner = exports.updatePartner = exports.createPartner = exports.getPartnerById = exports.getAllPartners = void 0;
const db_1 = require("../../config/db");
const imageHelper_1 = require("../../utils/imageHelper");
const getAllPartners = async () => {
    return await db_1.prisma.cmsPartner.findMany({
        orderBy: { createdAt: 'desc' },
    });
};
exports.getAllPartners = getAllPartners;
const getPartnerById = async (id) => {
    const partner = await db_1.prisma.cmsPartner.findUnique({ where: { id } });
    if (!partner)
        throw new Error('Partner not found');
    return partner;
};
exports.getPartnerById = getPartnerById;
const createPartner = async (body) => {
    return await db_1.prisma.cmsPartner.create({
        data: {
            name: body.name,
            imageUrl: body.imageUrl,
            isActive: body.isActive !== undefined ? Boolean(body.isActive) : true,
        },
    });
};
exports.createPartner = createPartner;
const updatePartner = async (id, body, newImageUrl) => {
    const partner = await db_1.prisma.cmsPartner.findUnique({ where: { id } });
    if (!partner)
        throw new Error('Partner not found');
    // Purani image delete karo agar nayi aayi hai
    if (newImageUrl && partner.imageUrl) {
        (0, imageHelper_1.deleteImage)(partner.imageUrl);
    }
    return await db_1.prisma.cmsPartner.update({
        where: { id },
        data: {
            name: body.name !== undefined ? body.name : partner.name,
            imageUrl: newImageUrl || partner.imageUrl,
            isActive: body.isActive !== undefined ? body.isActive === 'true' || body.isActive === true : partner.isActive,
        },
    });
};
exports.updatePartner = updatePartner;
const deletePartner = async (id) => {
    const partner = await db_1.prisma.cmsPartner.findUnique({ where: { id } });
    if (!partner)
        throw new Error('Partner not found');
    if (partner.imageUrl)
        (0, imageHelper_1.deleteImage)(partner.imageUrl);
    await db_1.prisma.cmsPartner.delete({ where: { id } });
    return { message: 'Partner deleted successfully' };
};
exports.deletePartner = deletePartner;
const togglePartnerStatus = async (id) => {
    const partner = await db_1.prisma.cmsPartner.findUnique({ where: { id } });
    if (!partner)
        throw new Error('Partner not found');
    return await db_1.prisma.cmsPartner.update({
        where: { id },
        data: { isActive: !partner.isActive },
    });
};
exports.togglePartnerStatus = togglePartnerStatus;
