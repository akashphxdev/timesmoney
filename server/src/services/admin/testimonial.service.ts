import { prisma } from '../../config/db';
import { deleteImage } from '../../utils/imageHelper';

export const getAllTestimonials = async () => {
  return await prisma.cmsTestimonial.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

export const getTestimonialById = async (id: string) => {
  const testimonial = await prisma.cmsTestimonial.findUnique({ where: { id } });
  if (!testimonial) throw new Error('Testimonial not found');
  return testimonial;
};

export const createTestimonial = async (body: {
  name: string;
  role?: string;
  avatar?: string;
  content: string;
  rating?: number;
  featured?: boolean;
  active?: boolean;
}) => {
  return await prisma.cmsTestimonial.create({
    data: {
      name: body.name,
      role: body.role || null,
      avatar: body.avatar || null,
      content: body.content,
      rating: body.rating !== undefined ? Number(body.rating) : 5,
      featured: body.featured !== undefined ? body.featured === true || (body.featured as any) === 'true' : false,
      active: body.active !== undefined ? body.active === true || (body.active as any) === 'true' : true,
    },
  });
};

export const updateTestimonial = async (id: string, body: any, newAvatarUrl?: string) => {
  const testimonial = await prisma.cmsTestimonial.findUnique({ where: { id } });
  if (!testimonial) throw new Error('Testimonial not found');

  if (newAvatarUrl && testimonial.avatar) {
    deleteImage(testimonial.avatar);
  }

  return await prisma.cmsTestimonial.update({
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

export const deleteTestimonial = async (id: string) => {
  const testimonial = await prisma.cmsTestimonial.findUnique({ where: { id } });
  if (!testimonial) throw new Error('Testimonial not found');

  if (testimonial.avatar) deleteImage(testimonial.avatar);

  await prisma.cmsTestimonial.delete({ where: { id } });
  return { message: 'Testimonial deleted successfully' };
};

export const toggleTestimonialActive = async (id: string) => {
  const testimonial = await prisma.cmsTestimonial.findUnique({ where: { id } });
  if (!testimonial) throw new Error('Testimonial not found');

  return await prisma.cmsTestimonial.update({
    where: { id },
    data: { active: !testimonial.active },
  });
};

export const toggleTestimonialFeatured = async (id: string) => {
  const testimonial = await prisma.cmsTestimonial.findUnique({ where: { id } });
  if (!testimonial) throw new Error('Testimonial not found');

  return await prisma.cmsTestimonial.update({
    where: { id },
    data: { featured: !testimonial.featured },
  });
};