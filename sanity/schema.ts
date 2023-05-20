import { type SchemaTypeDefinition } from 'sanity'
import contacts from './schemas/contacts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contacts],
}
