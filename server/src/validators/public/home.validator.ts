// ==================== HERO LEAD VALIDATION ====================

interface HeroLeadInput {
  name?: string;
  phone?: string;
  categoryId?: string;
  subCategoryId?: string;
  employmentType?: string;
}

interface ValidationError {
  field: string;
  message: string;
}

export const validateHeroLead = (body: HeroLeadInput): ValidationError[] => {
  const errors: ValidationError[] = [];
  const EMPLOYMENT_TYPES = ['Salaried', 'Self-Employed', 'Business', 'Student', 'Others'];

  // Name
  if (!body.name || body.name.trim() === '') {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (body.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  } else if (body.name.trim().length > 100) {
    errors.push({ field: 'name', message: 'Name must not exceed 100 characters' });
  }

  // Phone — 10 digit Indian number
  if (!body.phone || body.phone.trim() === '') {
    errors.push({ field: 'phone', message: 'Phone number is required' });
  } else if (!/^[6-9]\d{9}$/.test(body.phone.trim())) {
    errors.push({ field: 'phone', message: 'Enter a valid 10-digit Indian mobile number' });
  }

  // Category
  if (!body.categoryId || body.categoryId.trim() === '') {
    errors.push({ field: 'categoryId', message: 'Please select a category' });
  }

  // SubCategory — optional, but if provided should not be empty string
  if (body.subCategoryId !== undefined && body.subCategoryId.trim() === '') {
    errors.push({ field: 'subCategoryId', message: 'Sub-category value is invalid' });
  }

  // Employment Type — optional
  if (body.employmentType && !EMPLOYMENT_TYPES.includes(body.employmentType)) {
    errors.push({ field: 'employmentType', message: 'Invalid employment type' });
  }

  return errors;
};