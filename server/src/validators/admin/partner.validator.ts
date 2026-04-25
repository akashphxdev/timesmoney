export const validateCreatePartner = (body: any) => {
  const errors: string[] = [];
  if (!body.name) errors.push('Name is required');
  return errors;
};

export const validateUpdatePartner = (body: any) => {
  const errors: string[] = [];
  if (body.name !== undefined && !body.name) errors.push('Name cannot be empty');
  return errors;
};