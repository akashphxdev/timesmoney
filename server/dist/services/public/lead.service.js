"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductLead = void 0;
const db_1 = require("../../config/db");
const createProductLead = async (input) => {
    const { name, phone, email, productId, customData } = input;
    // Product exist check
    const product = await db_1.prisma.cmsProduct.findUnique({
        where: { id: productId },
        select: { id: true, name: true, categoryId: true },
    });
    if (!product) {
        const error = new Error('Product not found');
        error.statusCode = 404;
        throw error;
    }
    const lead = await db_1.prisma.cmsLead.create({
        data: {
            name,
            phone,
            email,
            source: 'product_page',
            status: 'NEW',
            productId: product.id,
            categoryId: product.categoryId,
            ...(customData && { customData }),
        },
        select: {
            id: true,
            name: true,
            phone: true,
            status: true,
            createdAt: true,
            product: {
                select: { id: true, name: true },
            },
        },
    });
    return lead;
};
exports.createProductLead = createProductLead;
