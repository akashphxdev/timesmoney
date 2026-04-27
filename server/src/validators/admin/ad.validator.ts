// src/validators/admin/ad.validator.ts

const validPages = ['HOME', 'BLOG', 'PRODUCT', 'CATEGORY', 'CALCULATOR'];
const validPositions = ['TOP', 'BOTTOM', 'BETWEEN_CONTENT', 'SIDEBAR'];
const validSizes = [
  'BANNER_728x90', 'BANNER_300x250', 'BANNER_300x600',
  'BANNER_320x50', 'BANNER_160x600', 'BANNER_970x90', 'CUSTOM'
];

export const validateCreateAd = (body: any): string[] => {
  const errors: string[] = [];

  if (!body.title || body.title.trim() === '') errors.push('Title is required');
  if (!body.page) errors.push('Page is required');
  else if (!validPages.includes(body.page)) errors.push('Invalid page value');

  if (!body.position) errors.push('Position is required');
  else if (!validPositions.includes(body.position)) errors.push('Invalid position value');

  if (body.size && !validSizes.includes(body.size)) errors.push('Invalid size value');

  if (body.startDateTime && isNaN(Date.parse(body.startDateTime)))
    errors.push('Invalid startDateTime');

  if (body.endDateTime && isNaN(Date.parse(body.endDateTime)))
    errors.push('Invalid endDateTime');

  if (body.startDateTime && body.endDateTime) {
    if (new Date(body.startDateTime) >= new Date(body.endDateTime))
      errors.push('endDateTime must be after startDateTime');
  }

  if (body.sortOrder !== undefined && isNaN(Number(body.sortOrder)))
    errors.push('sortOrder must be a number');

  return errors;
};

export const validateUpdateAd = (body: any): string[] => {
  const errors: string[] = [];

  if (body.page && !validPages.includes(body.page)) errors.push('Invalid page value');
  if (body.position && !validPositions.includes(body.position)) errors.push('Invalid position value');
  if (body.size && !validSizes.includes(body.size)) errors.push('Invalid size value');

  if (body.startDateTime && isNaN(Date.parse(body.startDateTime)))
    errors.push('Invalid startDateTime');

  if (body.endDateTime && isNaN(Date.parse(body.endDateTime)))
    errors.push('Invalid endDateTime');

  if (body.startDateTime && body.endDateTime) {
    if (new Date(body.startDateTime) >= new Date(body.endDateTime))
      errors.push('endDateTime must be after startDateTime');
  }

  if (body.sortOrder !== undefined && isNaN(Number(body.sortOrder)))
    errors.push('sortOrder must be a number');

  return errors;
};