export const validateUpdateLead = (body: any) => {
  const errors: string[] = [];
  const validStatuses = ['NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'REJECTED'];
  if (body.status && !validStatuses.includes(body.status)) errors.push('Invalid status');
  return errors;
};