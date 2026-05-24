import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemaTypes from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: "D'luz & Miçangas Studio",

  projectId: process.env.SANITY_PROJECT_ID || 'your_project_id',
  dataset: process.env.SANITY_DATASET || 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
