import multer from 'multer';
import path from 'path';
import fs from 'fs';

const createStorage = (folder: string) => {
  const uploadDir = path.join(process.cwd(), 'uploads', folder);
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  return multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
      const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
  });
};

const fileFilter = (_req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'));
  }
};

const uploadLimits = { fileSize: 5 * 1024 * 1024 };

// Product ke liye alag storage (image aur providerLogo alag folders mein)
const productStorage = multer.diskStorage({
  destination: (_req, file, cb) => {
    const folder = file.fieldname === 'providerLogo' ? 'provider-logos' : 'products';
    const uploadDir = path.join(process.cwd(), 'uploads', folder);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

export const uploadBlogCover = multer({
  storage: createStorage('blog-covers'),
  fileFilter,
  limits: uploadLimits,
}).single('coverImage');

export const uploadContent = multer({
  storage: createStorage('content'),
  fileFilter,
  limits: uploadLimits,
}).single('file');

export const uploadPartnerImage = multer({
  storage: createStorage('partners'),
  fileFilter,
  limits: uploadLimits,
}).single('imageUrl');

export const uploadCategoryImage = multer({
  storage: createStorage('categories'),
  fileFilter,
  limits: uploadLimits,
}).single('imageUrl');

export const uploadSubCategoryImage = multer({
  storage: createStorage('sub-categories'),
  fileFilter,
  limits: uploadLimits,
}).single('imageUrl');

export const uploadTestimonialAvatar = multer({
  storage: createStorage('testimonials'),
  fileFilter,
  limits: uploadLimits,
}).single('avatar');

export const uploadProductImages = multer({
  storage: productStorage,
  fileFilter,
  limits: uploadLimits,
}).fields([
  { name: 'image', maxCount: 1 },
  { name: 'providerLogo', maxCount: 1 },
]);

export const uploadAdImage = multer({
  storage: createStorage('ads'),
  fileFilter,
  limits: uploadLimits,
}).single('image');