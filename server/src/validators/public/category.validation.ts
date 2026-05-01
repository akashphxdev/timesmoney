import { z } from 'zod';

export const slugParamSchema = z.object({
  slug: z
    .string()
    .min(1, 'Slug required hai')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
});

export type SlugParam = z.infer<typeof slugParamSchema>;