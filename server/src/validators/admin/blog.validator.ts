// src/validators/admin/blog.validator.ts
export const validateCreateBlog = (body: any) => {
  const errors: string[] = [];

  if (!body.title) errors.push('Title is required');
  if (!body.content) errors.push('Content is required');
  if (!body.slug) errors.push('Slug is required');

  const validStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'];
  if (body.status && !validStatuses.includes(body.status)) {
    errors.push('Invalid status');
  }

  return errors;
};

export const validateUpdateBlog = (body: any) => {
  const errors: string[] = [];

  const validStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'];
  if (body.status && !validStatuses.includes(body.status)) {
    errors.push('Invalid status');
  }

  return errors;
};