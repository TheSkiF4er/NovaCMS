export type Id = string;

export type Locale = string;

export interface Tenant {
  id: Id;
  slug: string;
  name: string;
  createdAt: string;
}

export interface User {
  id: Id;
  email: string;
  displayName: string;
  createdAt: string;
}

export interface ContentType {
  id: Id;
  slug: string;
  name: string;
  fields: FieldDefinition[];
  createdAt: string;
  updatedAt: string;
}

export type FieldKind =
  | 'text'
  | 'richText'
  | 'number'
  | 'boolean'
  | 'dateTime'
  | 'json'
  | 'relation'
  | 'media';

export interface FieldDefinition {
  key: string;
  kind: FieldKind;
  required?: boolean;
  localized?: boolean;
  description?: string;
  // For relations:
  targetTypeSlug?: string;
  relationKind?: 'one' | 'many';
}
