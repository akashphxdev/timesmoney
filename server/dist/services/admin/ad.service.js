"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleAdStatus = exports.deleteAd = exports.updateAd = exports.createAd = exports.getAdById = exports.getAllAds = void 0;
const db_1 = require("../../config/db");
const imageHelper_1 = require("../../utils/imageHelper");
const getAllAds = async () => {
    return await db_1.prisma.cmsAd.findMany({
        select: {
            id: true,
            title: true,
            pages: true,
            positions: true,
            size: true,
            customWidth: true,
            customHeight: true,
            image: true,
            link: true,
            active: true,
            sortOrder: true,
            startDateTime: true,
            endDateTime: true,
            createdAt: true,
            _count: {
                select: { events: true },
            },
        },
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
};
exports.getAllAds = getAllAds;
const getAdById = async (id) => {
    const ad = await db_1.prisma.cmsAd.findUnique({
        where: { id },
        include: {
            _count: { select: { events: true } },
        },
    });
    if (!ad)
        throw new Error('Ad not found');
    return ad;
};
exports.getAdById = getAdById;
const createAd = async (body) => {
    return await db_1.prisma.cmsAd.create({
        data: {
            title: body.title.trim(),
            pages: Array.isArray(body.pages) ? body.pages : [],
            positions: Array.isArray(body.positions) ? body.positions : [],
            size: body.size || 'BANNER_300x250',
            customWidth: body.size === 'CUSTOM' ? Number(body.customWidth) : null,
            customHeight: body.size === 'CUSTOM' ? Number(body.customHeight) : null,
            image: body.image,
            link: body.link || null,
            active: body.active !== undefined ? body.active === 'true' || body.active === true : true,
            sortOrder: body.sortOrder ? Number(body.sortOrder) : 0,
            startDateTime: body.startDateTime ? new Date(body.startDateTime) : null,
            endDateTime: body.endDateTime ? new Date(body.endDateTime) : null,
        },
    });
};
exports.createAd = createAd;
const updateAd = async (id, body, newImage) => {
    const ad = await db_1.prisma.cmsAd.findUnique({ where: { id } });
    if (!ad)
        throw new Error('Ad not found');
    if (newImage && ad.image)
        (0, imageHelper_1.deleteImage)(ad.image);
    const size = body.size || ad.size;
    return await db_1.prisma.cmsAd.update({
        where: { id },
        data: {
            title: body.title ? body.title.trim() : ad.title,
            pages: Array.isArray(body.pages) ? body.pages : ad.pages,
            positions: Array.isArray(body.positions) ? body.positions : ad.positions,
            size,
            customWidth: size === 'CUSTOM' ? Number(body.customWidth) : null,
            customHeight: size === 'CUSTOM' ? Number(body.customHeight) : null,
            image: newImage || ad.image,
            link: body.link !== undefined ? body.link || null : ad.link,
            active: body.active !== undefined ? body.active === 'true' || body.active === true : ad.active,
            sortOrder: body.sortOrder !== undefined ? Number(body.sortOrder) : ad.sortOrder,
            startDateTime: body.startDateTime ? new Date(body.startDateTime) : body.startDateTime === '' ? null : ad.startDateTime,
            endDateTime: body.endDateTime ? new Date(body.endDateTime) : body.endDateTime === '' ? null : ad.endDateTime,
        },
    });
};
exports.updateAd = updateAd;
const deleteAd = async (id) => {
    const ad = await db_1.prisma.cmsAd.findUnique({ where: { id } });
    if (!ad)
        throw new Error('Ad not found');
    if (ad.image)
        (0, imageHelper_1.deleteImage)(ad.image);
    await db_1.prisma.cmsAdEvent.deleteMany({ where: { adId: id } });
    await db_1.prisma.cmsAd.delete({ where: { id } });
    return { message: 'Ad deleted successfully' };
};
exports.deleteAd = deleteAd;
const toggleAdStatus = async (id) => {
    const ad = await db_1.prisma.cmsAd.findUnique({ where: { id } });
    if (!ad)
        throw new Error('Ad not found');
    return await db_1.prisma.cmsAd.update({
        where: { id },
        data: { active: !ad.active },
    });
};
exports.toggleAdStatus = toggleAdStatus;
