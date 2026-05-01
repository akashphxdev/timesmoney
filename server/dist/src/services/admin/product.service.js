"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const db_1 = require("../../config/db");
const imageHelper_1 = require("../../utils/imageHelper");
const getAllProducts = async () => {
    return await db_1.prisma.cmsProduct.findMany({
        select: {
            id: true,
            name: true,
            slug: true,
            image: true,
            provider: true,
            status: true,
            featured: true,
            isBestSeller: true,
            sortOrder: true,
            viewCount: true,
            createdAt: true,
            category: { select: { id: true, name: true } },
            subCategory: { select: { id: true, name: true } },
        },
        orderBy: { sortOrder: 'asc' }
    });
};
exports.getAllProducts = getAllProducts;
const getProductById = async (id) => {
    const product = await db_1.prisma.cmsProduct.findUnique({
        where: { id },
        include: {
            category: { select: { id: true, name: true } },
            subCategory: { select: { id: true, name: true } },
        }
    });
    if (!product)
        throw new Error('Product not found');
    return product;
};
exports.getProductById = getProductById;
const createProduct = async (body, files) => {
    const existing = await db_1.prisma.cmsProduct.findUnique({ where: { slug: body.slug } });
    if (existing)
        throw new Error('Slug already exists');
    const image = files?.image?.[0] ? `/uploads/products/${files.image[0].filename}` : undefined;
    const providerLogo = files?.providerLogo?.[0] ? `/uploads/provider-logos/${files.providerLogo[0].filename}` : undefined;
    return await db_1.prisma.cmsProduct.create({
        data: {
            name: body.name,
            slug: body.slug,
            shortDescription: body.shortDescription,
            description: body.description,
            image,
            provider: body.provider,
            providerLogo,
            interestRate: body.interestRate,
            processingFee: body.processingFee,
            minAmount: body.minAmount,
            maxAmount: body.maxAmount,
            tenure: body.tenure,
            features: body.features ? JSON.parse(body.features) : null,
            benefits: body.benefits ? JSON.parse(body.benefits) : null,
            eligibility: body.eligibility ? JSON.parse(body.eligibility) : null,
            formFields: body.formFields ? JSON.parse(body.formFields) : null,
            applyUrl: body.applyUrl,
            status: body.status || 'DRAFT',
            featured: body.featured === 'true',
            isBestSeller: body.isBestSeller === 'true',
            badge: body.badge,
            sortOrder: body.sortOrder ? parseInt(body.sortOrder) : 0,
            seoTitle: body.seoTitle,
            seoDescription: body.seoDescription,
            categoryId: body.categoryId || null,
            subCategoryId: body.subCategoryId || null,
        }
    });
};
exports.createProduct = createProduct;
const updateProduct = async (id, body, files) => {
    const product = await db_1.prisma.cmsProduct.findUnique({ where: { id } });
    if (!product)
        throw new Error('Product not found');
    let image = product.image;
    let providerLogo = product.providerLogo;
    if (files?.image?.[0]) {
        if (product.image)
            (0, imageHelper_1.deleteImage)(product.image);
        image = `/uploads/products/${files.image[0].filename}`;
    }
    if (files?.providerLogo?.[0]) {
        if (product.providerLogo)
            (0, imageHelper_1.deleteImage)(product.providerLogo);
        providerLogo = `/uploads/provider-logos/${files.providerLogo[0].filename}`;
    }
    return await db_1.prisma.cmsProduct.update({
        where: { id },
        data: {
            name: body.name,
            slug: body.slug,
            shortDescription: body.shortDescription,
            description: body.description,
            image,
            provider: body.provider,
            providerLogo,
            interestRate: body.interestRate,
            processingFee: body.processingFee,
            minAmount: body.minAmount,
            maxAmount: body.maxAmount,
            tenure: body.tenure,
            features: body.features ? JSON.parse(body.features) : null,
            benefits: body.benefits ? JSON.parse(body.benefits) : null,
            eligibility: body.eligibility ? JSON.parse(body.eligibility) : null,
            formFields: body.formFields ? JSON.parse(body.formFields) : null,
            applyUrl: body.applyUrl,
            status: body.status,
            featured: body.featured === 'true',
            isBestSeller: body.isBestSeller === 'true',
            badge: body.badge,
            sortOrder: body.sortOrder ? parseInt(body.sortOrder) : 0,
            seoTitle: body.seoTitle,
            seoDescription: body.seoDescription,
            categoryId: body.categoryId || null,
            subCategoryId: body.subCategoryId || null,
        }
    });
};
exports.updateProduct = updateProduct;
const deleteProduct = async (id) => {
    const product = await db_1.prisma.cmsProduct.findUnique({ where: { id } });
    if (!product)
        throw new Error('Product not found');
    if (product.image)
        (0, imageHelper_1.deleteImage)(product.image);
    if (product.providerLogo)
        (0, imageHelper_1.deleteImage)(product.providerLogo);
    await db_1.prisma.cmsProduct.delete({ where: { id } });
    return { message: 'Product deleted successfully' };
};
exports.deleteProduct = deleteProduct;
