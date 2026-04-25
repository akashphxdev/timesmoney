export const validateCreateProduct = (body: any) => {
  const errors: string[] = [];
  if (!body.name) errors.push('Name is required');
  if (!body.slug) errors.push('Slug is required');
  if (!body.categoryId) errors.push('Category is required');
  if (!body.shortDescription) errors.push('shortDescription is required');
  if (!body.description) errors.push('Description is required');
  if (!body.provider) errors.push('Provider is required');
  if (!body.applyUrl) errors.push('Apply URL is required');
  if (!body.seoTitle) errors.push('SEO Title is required');
  if (!body.seoDescription) errors.push('SEO Description is required');
  const validStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'];
  if (body.status && !validStatuses.includes(body.status)) errors.push('Invalid status');
  return errors;
};

export const validateUpdateProduct = (body: any) => {
  const errors: string[] = [];
  const validStatuses = ['DRAFT', 'PUBLISHED', 'ARCHIVED'];
  if (body.status && !validStatuses.includes(body.status)) errors.push('Invalid status');
  return errors;
};