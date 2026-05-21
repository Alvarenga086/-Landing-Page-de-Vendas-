import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || 'production'
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01'
const useCdn = process.env.SANITY_USE_CDN === 'true'
const token = process.env.SANITY_TOKEN || undefined

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token,
    })
  : null

const fallbackProducts = [
  {
    id: 1,
    name: 'Bag Anoitecer',
    description: 'Elegância noturna em cada detalhe. Bolsa confeccionada com miçangas em tons de azul marinho e dourado.',
    imageUrl: '/images/bag-anoitecer.jpg',
    category: 'Bolsa de Miçangas',
  },
  {
    id: 2,
    name: 'Bag Aliança',
    description: 'Perfeita para ocasiões especiais. Design clássico com miçangas brancas e detalhes dourados.',
    imageUrl: '/images/bag-alianca.jpg',
    category: 'Bolsa de Miçangas',
  },
  {
    id: 3,
    name: 'Bag Cristal',
    description: 'Brilho e sofisticação. Miçangas cristalinas que capturam a luz de forma única.',
    imageUrl: '/images/bag-cristal.jpg',
    category: 'Bolsa de Miçangas',
  },
]

export async function fetchProducts() {
  if (!sanityClient) {
    return fallbackProducts
  }

  const query = `*[_type == "product"] | order(_createdAt desc){
    _id,
    name,
    description,
    category,
    "imageUrl": image.asset->url
  }`

  return sanityClient.fetch(query)
}

export default sanityClient
