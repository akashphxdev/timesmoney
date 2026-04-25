export const validateCreateTestimonial = (body: any) => {
  const errors: string[] = [];
  if (!body.name) errors.push('Name is required');
  if (!body.content) errors.push('Content is required');
  if (body.rating !== undefined) {
    const r = Number(body.rating);
    if (isNaN(r) || r < 1 || r > 5) errors.push('Rating must be between 1 and 5');
  }
  return errors;
};

export const validateUpdateTestimonial = (body: any) => {
  const errors: string[] = [];
  if (body.name !== undefined && !body.name) errors.push('Name cannot be empty');
  if (body.content !== undefined && !body.content) errors.push('Content cannot be empty');
  if (body.rating !== undefined) {
    const r = Number(body.rating);
    if (isNaN(r) || r < 1 || r > 5) errors.push('Rating must be between 1 and 5');
  }
  return errors;
};