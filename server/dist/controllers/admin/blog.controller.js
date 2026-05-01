"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContentImage = exports.uploadImage = exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const blog_validator_1 = require("../../validators/admin/blog.validator");
const blog_service_1 = require("../../services/admin/blog.service");
const getAll = async (_req, res) => {
    try {
        const blogs = await (0, blog_service_1.getAllBlogs)();
        res.json({ success: true, data: blogs });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await (0, blog_service_1.getBlogById)(id);
        res.json({ success: true, data: blog });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getOne = getOne;
const create = async (req, res) => {
    try {
        const errors = (0, blog_validator_1.validateCreateBlog)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const coverImage = req.file ? `/uploads/blog-covers/${req.file.filename}` : undefined;
        const blog = await (0, blog_service_1.createBlog)({ ...req.body, coverImage });
        res.status(201).json({ success: true, message: 'Blog created', data: blog });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const id = req.params.id;
        const errors = (0, blog_validator_1.validateUpdateBlog)(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ success: false, errors });
        }
        const newCoverImage = req.file ? `/uploads/blog-covers/${req.file.filename}` : undefined;
        const blog = await (0, blog_service_1.updateBlog)(id, req.body, newCoverImage);
        res.json({ success: true, message: 'Blog updated', data: blog });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await (0, blog_service_1.deleteBlog)(id);
        res.json({ success: true, message: result.message });
    }
    catch (error) {
        const err = error;
        res.status(400).json({ success: false, message: err.message });
    }
};
exports.remove = remove;
// Content image upload
const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No image uploaded' });
        }
        const imageUrl = `/uploads/content/${req.file.filename}`;
        res.json({ success: true, path: imageUrl });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.uploadImage = uploadImage;
// Content image delete
const deleteContentImage = async (req, res) => {
    try {
        const { path: imagePath } = req.body;
        if (!imagePath) {
            return res.status(400).json({ success: false, message: 'Path is required' });
        }
        const { deleteImage } = await Promise.resolve().then(() => __importStar(require('../../utils/imageHelper')));
        deleteImage(imagePath);
        res.json({ success: true, message: 'Image deleted' });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.deleteContentImage = deleteContentImage;
