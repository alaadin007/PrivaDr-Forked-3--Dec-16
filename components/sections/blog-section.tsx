"use client"

import { BlogCard } from "@/components/blog/blog-card"
import { getAllPosts } from "@/lib/data/blog/posts"

export function BlogSection() {
  const posts = getAllPosts()
  const featuredPosts = posts.slice(0, 3)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Expert Insights & Updates</h2>
          <p className="text-lg text-muted-foreground">
            Stay informed with the latest medical knowledge from our experienced specialists
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              priority={index === 0}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}