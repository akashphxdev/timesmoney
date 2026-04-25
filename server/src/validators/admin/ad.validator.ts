const validPlacements = [
  'HOMEPAGE_TOP', 'HOMEPAGE_BOTTOM', 'BLOG_TOP', 'BLOG_BOTTOM',
  'PRODUCT_PAGE', 'BETWEEN_CONTENT', 'CALCULATOR_TOP',
  'CALCULATOR_BOTTOM', 'CATEGORY_TOP', 'CATEGORY_BOTTOM',
];

export const validateCreateAd = (body: any) => {
  const errors: string[] = [];

  if (!body.title) errors.push('Title is required');

  // placements array check
  if (!body.placements) {
    errors.push('At least one placement is required');
  } else {
    const placementsArray = Array.isArray(body.placements)
      ? body.placements
      : [body.placements];

    if (placementsArray.length === 0) {
      errors.push('At least one placement is required');
    }

    const invalidPlacements = placementsArray.filter(
      (p: string) => !validPlacements.includes(p)
    );
    if (invalidPlacements.length > 0) {
      errors.push(`Invalid placements: ${invalidPlacements.join(', ')}`);
    }
  }

  return errors;
};

export const validateUpdateAd = (body: any) => {
  const errors: string[] = [];

  if (body.placements !== undefined) {
    const placementsArray = Array.isArray(body.placements)
      ? body.placements
      : [body.placements];

    const invalidPlacements = placementsArray.filter(
      (p: string) => !validPlacements.includes(p)
    );
    if (invalidPlacements.length > 0) {
      errors.push(`Invalid placements: ${invalidPlacements.join(', ')}`);
    }
  }

  return errors;
};