import { z } from 'zod'

export const blogPostSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  author: z.string(),
  category: z.string(),
  date: z.string(),
  image: z.string().url(),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string())
  })
})

export type ValidatedBlogPost = z.infer<typeof blogPostSchema>

export function validateBlogPost(post: unknown) {
  return blogPostSchema.safeParse(post)
}