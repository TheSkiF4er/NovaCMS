import { z } from 'zod';

export const FieldDefinitionSchema = z.object({
  key: z.string().min(1),
  kind: z.enum(['text', 'richText', 'number', 'boolean', 'dateTime', 'json', 'relation', 'media']),
  required: z.boolean().optional(),
  localized: z.boolean().optional(),
  description: z.string().optional(),
  targetTypeSlug: z.string().optional(),
  relationKind: z.enum(['one', 'many']).optional()
});

export const ContentTypeSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  fields: z.array(FieldDefinitionSchema).min(1)
});

export type ContentTypeInput = z.infer<typeof ContentTypeSchema>;
