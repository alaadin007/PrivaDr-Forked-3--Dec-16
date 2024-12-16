import { BlogPost, BlogMeta, BlogContent } from './types'
import { blogPostSchema } from './validation'
import { formatBlogContent } from './formatter'

export async function generateBlogPost(
  meta: BlogMeta,
  content: BlogContent,
  author: string,
  category: string,
  image: string
): Promise<BlogPost> {
  const date = new Date().toISOString().split('T')[0]
  const slug = meta.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  const blogPost: BlogPost = {
    slug,
    meta,
    content,
    author,
    date,
    category,
    image,
    excerpt: content.introduction.slice(0, 160),
    seo: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      keywords: [meta.primaryKeyword, ...meta.secondaryKeywords]
    }
  }

  // Validate the blog post structure
  blogPostSchema.parse(blogPost)

  return blogPost
}