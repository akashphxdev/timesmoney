"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTestimonialFeatured = exports.toggleTestimonialActive = exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getTestimonialById = exports.getAllTestimonials = void 0;
const db_1 = require("../../config/db");
const imageHelper_1 = require("../../utils/imageHelper");
const getAllTestimonials = async () => {
    return await db_1.prisma.cmsTestimonial.findMany({
        orderBy: { createdAt: 'desc' },
    });
};
exports.getAllTestimonials = getAllTestimonials;
const getTestimonialById = async (id) => {
    const testimonial = await db_1.prisma.cmsTestimonial.findUnique({ where: { id } });
    if (!testimonial)
        throw new Error('Testimonial not found');
    return testimonial;
};
exports.getTestimonialById = getTestimonialById;
const createTestimonial = async (body) => {
    return await db_1.prisma.cmsTestimonial.create({
        data: {
            name: body.name,
            role: body.role || null,
            avatar: body.avatar || null,
            content: body.content,
            rating: body.rating !== undefined ? Number(body.rating) : 5,
            featured: body.featured !== undefined ? body.featured === true || body.featured === 'true' : false,
            active: body.active !== undefined ? body.active === true || body.active === 'true' : true,
        },
    });
};
exports.createTestimonial = createTestimonial;
const updateTestimonial = async (id, body, newAvatarUrl) => {
    const testimonial = await db_1.prisma.cmsTestimonial.findUnique({ where: { id } });
    if (!testimonial)
        throw new Error('Testimonial not found');
    if (newAvatarUrl && testimonial.avatar) {
        (0, imageHelper_1.deleteImage)(testimonial.avatar);
    }
    return await db_1.prisma.cmsTestimonial.update({
        where: { id },
        data: {
            name: body.name !== undefined ? body.name : testimonial.name,
            role: body.role !== undefined ? body.role : testimonial.role,
            avatar: newAvatarUrl || testimonial.avatar,
            content: body.content !== undefined ? body.content : testimonial.content,
            rating: body.rating !== undefined ? Number(body.rating) : testimonial.rating,
            featured: body.featured !== undefined ? body.featured === 'true' || body.featured === true : testimonial.featured,
            active: body.active !== undefined ? body.active === 'true' || body.active === true : testimonial.active,
        },
    });
};
exports.updateTestimonial = updateTestimonial;
const deleteTestimonial = async (id) => {
    const testimonial = await db_1.prisma.cmsTestimonial.findUnique({ where: { id } });
    if (!testimonial)
        throw new Error('Testimonial not found');
    if (testimonial.avatar)
        (0, imageHelper_1.deleteImage)(testimonial.avatar);
    await db_1.prisma.cmsTestimonial.delete({ where: { id } });
    return { message: 'Testimonial deleted successfully' };
};
exports.deleteTestimonial = deleteTestimonial;
const toggleTestimonialActive = async (id) => {
    const testimonial = await db_1.prisma.cmsTestimonial.findUnique({ where: { id } });
    if (!testimonial)
        throw new Error('Testimonial not found');
    return await db_1.prisma.cmsTestimonial.update({
        where: { id },
        data: { active: !testimonial.active },
    });
};
exports.toggleTestimonialActive = toggleTestimonialActive;
const toggleTestimonialFeatured = async (id) => {
    const testimonial = await db_1.prisma.cmsTestimonial.findUnique({ where: { id } });
    if (!testimonial)
        throw new Error('Testimonial not found');
    return await db_1.prisma.cmsTestimonial.update({
        where: { id },
        data: { featured: !testimonial.featured },
    });
};
exports.toggleTestimonialFeatured = toggleTestimonialFeatured;
