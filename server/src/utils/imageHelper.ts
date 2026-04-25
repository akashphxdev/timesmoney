// src/utils/imageHelper.ts
import fs from 'fs';
import path from 'path';

export const deleteImage = (imagePath: string): void => {
  if (!imagePath) return;
  const fullPath = path.join(process.cwd(), imagePath);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }
};

export const deleteMultipleImages = (imagePaths: string[]): void => {
  if (!imagePaths || imagePaths.length === 0) return;
  imagePaths.forEach((imagePath) => deleteImage(imagePath));
};

export const extractImagesFromContent = (content: string): string[] => {
  const regex = /<img[^>]+src="([^">]+)"/g;
  const images: string[] = [];
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