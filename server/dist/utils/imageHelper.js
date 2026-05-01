"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractImagesFromContent = exports.deleteMultipleImages = exports.deleteImage = void 0;
// src/utils/imageHelper.ts
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const deleteImage = (imagePath) => {
    if (!imagePath)
        return;
    const fullPath = path_1.default.join(process.cwd(), imagePath);
    if (fs_1.default.existsSync(fullPath)) {
        fs_1.default.unlinkSync(fullPath);
    }
};
exports.deleteImage = deleteImage;
const deleteMultipleImages = (imagePaths) => {
    if (!imagePaths || imagePaths.length === 0)
        return;
    imagePaths.forEach((imagePath) => (0, exports.deleteImage)(imagePath));
};
exports.deleteMultipleImages = deleteMultipleImages;
const extractImagesFromContent = (content) => {
    const regex = /<img[^>]+src="([^">]+)"/g;
    const images = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        if (match[1].includes('/uploads/')) {
            // Extract relative path from full URL
            const urlPath = match[1].replace(/^https?:\/\/[^/]+/, '');
            images.push(urlPath);
        }
    }
    return images;
};
exports.extractImagesFromContent = extractImagesFromContent;
