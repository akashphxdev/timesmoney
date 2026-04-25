export const validateLogin = (body: any) => {
  const errors: string[] = [];

  if (!body.email) errors.push('Email is required');
  if (!body.password) errors.push('Password is required');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (body.email && !emailRegex.test(body.email)) {
    errors.push('Invalid email format');
  }

  return errors;
};