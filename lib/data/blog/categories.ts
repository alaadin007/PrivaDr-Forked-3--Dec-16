import { BlogCategory } from '@/lib/blog/types'

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    slug: 'child-development',
    name: 'Child Development',
    description: 'Articles about child development and pediatric care'
  },
  {
    id: '2',
    slug: 'iv-therapy',
    name: 'IV Therapy',
    description: 'Information about IV vitamin therapy and wellness treatments'
  },
  {
    id: '3',
    slug: 'weight-loss',
    name: 'Weight Loss',
    description: 'Articles about medical weight loss treatments and management'
  },
  {
    id: '4',
    slug: 'lifestyle',
    name: 'Lifestyle Medicine',
    description: 'Insights into holistic health and lifestyle interventions'
  }
]

export function getAllCategories(): BlogCategory[] {
  return blogCategories
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find(category => category.slug === slug)
}