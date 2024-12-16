import { Metadata } from 'next'
import { BlogPost } from "@/components/blog/blog-post"
import { RelatedPosts } from "@/components/blog/related-posts"
import { notFound } from "next/navigation"
import { getBlogPost, getRelatedPosts } from '@/lib/blog/posts'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords
  }
}

export function generateStaticParams() {
  return [
    { slug: "understanding-adhd-in-children" },
    { slug: "benefits-of-iv-vitamin-therapy" }
  ]
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.category)

  return (
    <main className="flex flex-col min-h-screen">
      <BlogPost post={post} />
      <RelatedPosts posts={relatedPosts} currentSlug={params.slug} />
    </main>
  )
}