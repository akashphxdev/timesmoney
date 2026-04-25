export const validateCreateSubCategory = (body: any) => {
  const errors: string[] = [];
  if (!body.name) errors.push('Name is required');
  if (!body.slug) errors.push('Slug is required');
  if (!body.categoryId) errors.push('Category is required');
  return errors;
};

export const validateUpdateSubCategory = (body: any) => {
  const errors: string[] = [];
  if (body.name !== undefined && !body.name) errors.push('Name cannot be empty');
  if (body.slug !== undefined && !body.slug) errors.push('Slug cannot be empty');
  return errors;
};