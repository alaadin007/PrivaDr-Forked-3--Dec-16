export * from './types'
export * from './validation'
export * from './formatter'
export * from './generator'

import { BlogPost } from './types'

const blogPosts: Record<string, BlogPost> = {}

export function addBlogPost(post: BlogPost) {
  blogPosts[post.slug] = post
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug]
}

export function getRelatedPosts(category: string) {
  return Object.entries(blogPosts)
    .filter(([_, post]) => post.category === category)
    .map(([slug, post]) => ({
      title: post.meta.title,
      excerpt: post.excerpt,
      date: post.date,
      slug,
      image: post.image,
      category: post.category
    }))
    .slice(0, 3)
}

export function getAllPosts() {
  return Object.values(blogPosts)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}