import { z } from 'zod'

export const blogPostSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(5).max(100),
  title: z.string().min(10).max(100),
  excerpt: z.string().min(100).max(200),
  content: z.string().min(800),
  author: z.object({
    id: z.string(),
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    avatar: z.string().url(),
    credentials: z.array(z.string()),
    specialties: z.array(z.string())
  }),
  category: z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    description: z.string()
  }),
  tags: z.array(z.string()),
  publishDate: z.string().datetime(),
  lastModified: z.string().datetime(),
  featuredImage: z.object({
    url: z.string().url(),
    alt: z.string()
  }),
  seo: z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    canonicalUrl: z.string().url().optional()
  }),
  metadata: z.object({
    readTime: z.number(),
    wordCount: z.number(),
    reviewedBy: z.string().optional(),
    reviewDate: z.string().datetime().optional()
  })
})

export type ValidatedBlogPost = z.infer<typeof blogPostSchema>