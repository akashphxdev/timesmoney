"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAdImage = exports.uploadProductImages = exports.uploadTestimonialAvatar = exports.uploadSubCategoryImage = exports.uploadCategoryImage = exports.uploadPartnerImage = exports.uploadContent = exports.uploadBlogCover = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const createStorage = (folder) => {
    const uploadDir = path_1.default.join(process.cwd(), 'uploads', folder);
    if (!fs_1.default.existsSync(uploadDir)) {
        fs_1.default.mkdirSync(uploadDir, { recursive: true });
    }
    return multer_1.default.diskStorage({
        destination: (_req, _file, cb) => {
            cb(null, uploadDir);
        },
        filename: (_req, file, cb) => {
            const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path_1.default.extname(file.originalname)}`;
            cb(null, uniqueName);
        },
    });
};
const fileFilter = (_req, file, cb) => {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (allowed.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new Error('Only images are allowed'));
    }
};
const uploadLimits = { fileSize: 5 * 1024 * 1024 };
// Product ke liye alag storage (image aur providerLogo alag folders mein)
const productStorage = multer_1.default.diskStorage({
    destination: (_req, file, cb) => {
        const folder = file.fieldname === 'providerLogo' ? 'provider-logos' : 'products';
        const uploadDir = path_1.default.join(process.cwd(), 'uploads', folder);
        if (!fs_1.default.existsSync(uploadDir)) {
            fs_1.default.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path_1.default.extname(file.originalname)}`;
        cb(null, uniqueName);
    },
});
exports.uploadBlogCover = (0, multer_1.default)({
    storage: createStorage('blog-covers'),
    fileFilter,
    limits: uploadLimits,
}).single('coverImage');
exports.uploadContent = (0, multer_1.default)({
    storage: createStorage('content'),
    fileFilter,
    limits: uploadLimits,
}).single('file');
exports.uploadPartnerImage = (0, multer_1.default)({
    storage: createStorage('partners'),
    fileFilter,
    limits: uploadLimits,
}).single('imageUrl');
exports.uploadCategoryImage = (0, multer_1.default)({
    storage: createStorage('categories'),
    fileFilter,
    limits: uploadLimits,
}).single('imageUrl');
exports.uploadSubCategoryImage = (0, multer_1.default)({
    storage: createStorage('sub-categories'),
    fileFilter,
    limits: uploadLimits,
}).single('imageUrl');
exports.uploadTestimonialAvatar = (0, multer_1.default)({
    storage: createStorage('testimonials'),
    fileFilter,
    limits: uploadLimits,
}).single('avatar');
exports.uploadProductImages = (0, multer_1.default)({
    storage: productStorage,
    fileFilter,
    limits: uploadLimits,
}).fields([
    { name: 'image', maxCount: 1 },
    { name: 'providerLogo', maxCount: 1 },
]);
exports.uploadAdImage = (0, multer_1.default)({
    storage: createStorage('ads'),
    fileFilter,
    limits: uploadLimits,
}).single('image');
