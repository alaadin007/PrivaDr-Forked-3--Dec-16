"use client"

import { BlogCard } from "./blog-card"
import { getRelatedPosts } from "@/lib/blog"

interface ServiceBlogSectionProps {
  service: string
}

export function ServiceBlogSection({ service }: ServiceBlogSectionProps) {
  const posts = getRelatedPosts(service)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Related Articles</h2>
          <p className="text-lg text-muted-foreground">
            Stay informed with our latest insights about {service}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}