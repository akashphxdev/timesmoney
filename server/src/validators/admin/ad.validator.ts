const validPages = [
  'HOME', 'BLOG', 'BLOG_DETAIL', 'PRODUCT', 'PRODUCT_DETAIL',
  'CATEGORY', 'SUB_CATEGORY', 'TOOLS', 'CALCULATOR'
];
const validPositions = ['TOP', 'BOTTOM', 'BETWEEN_CONTENT', 'SIDEBAR'];
const validSizes = [
  'BANNER_728x90', 'BANNER_300x250', 'BANNER_300x600',
  'BANNER_320x50', 'BANNER_160x600', 'BANNER_970x90', 'CUSTOM'
];

export const validateCreateAd = (body: any): string[] => {
  const errors: string[] = [];

  if (!body.title || body.title.trim() === '') errors.push('Title is required');

  // pages — array expected
  const pages = Array.isArray(body.pages) ? body.pages : [];
  if (pages.length === 0) errors.push('At least one page is required');
  else {
    const invalidPages = pages.filter((p: string) => !validPages.includes(p));
    if (invalidPages.length > 0) errors.push(`Invalid pages: ${invalidPages.join(', ')}`);
  }

  // positions — array expected
  const positions = Array.isArray(body.positions) ? body.positions : [];
  if (positions.length === 0) errors.push('At least one position is required');
  else {
    const invalidPositions = positions.filter((p: string) => !validPositions.includes(p));
    if (invalidPositions.length > 0) errors.push(`Invalid positions: ${invalidPositions.join(', ')}`);
  }

  if (body.size && !validSizes.includes(body.size)) errors.push('Invalid size value');

  if (body.size === 'CUSTOM') {
    if (!body.customWidth || isNaN(Number(body.customWidth)) || Number(body.customWidth) <= 0)
      errors.push('customWidth is required for CUSTOM size');
    if (!body.customHeight || isNaN(Number(body.customHeight)) || Number(body.customHeight) <= 0)
      errors.push('customHeight is required for CUSTOM size');
  }

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

  if (body.pages !== undefined) {
    const pages = Array.isArray(body.pages) ? body.pages : [];
    if (pages.length === 0) errors.push('At least one page is required');
    else {
      const invalidPages = pages.filter((p: string) => !validPages.includes(p));
      if (invalidPages.length > 0) errors.push(`Invalid pages: ${invalidPages.join(', ')}`);
    }
  }

  if (body.positions !== undefined) {
    const positions = Array.isArray(body.positions) ? body.positions : [];
    if (positions.length === 0) errors.push('At least one position is required');
    else {
      const invalidPositions = positions.filter((p: string) => !validPositions.includes(p));
      if (invalidPositions.length > 0) errors.push(`Invalid positions: ${invalidPositions.join(', ')}`);
    }
  }

  if (body.size && !validSizes.includes(body.size)) errors.push('Invalid size value');

  if (body.size === 'CUSTOM') {
    if (!body.customWidth || isNaN(Number(body.customWidth)) || Number(body.customWidth) <= 0)
      errors.push('customWidth is required for CUSTOM size');
    if (!body.customHeight || isNaN(Number(body.customHeight)) || Number(body.customHeight) <= 0)
      errors.push('customHeight is required for CUSTOM size');
  }

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