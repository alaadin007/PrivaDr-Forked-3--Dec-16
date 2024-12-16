"use client"

import { BlogCard } from "@/components/blog/blog-card"

const adhdBlogs = [
  {
    title: "Understanding ADHD in Children",
    excerpt: "ADHD is a neurodevelopmental condition that affects children's behavior, attention, and impulse control. Learn about early recognition and proper support.",
    date: "2024-02-05",
    slug: "understanding-adhd-in-children",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80",
    category: "ADHD Assessment"
  },
  {
    title: "Supporting Your Child's ADHD Journey",
    excerpt: "Discover effective strategies and tools to help your child thrive with ADHD. Expert guidance on creating a supportive environment.",
    date: "2024-02-04",
    slug: "supporting-child-adhd-journey",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80",
    category: "ADHD Assessment"
  },
  {
    title: "ADHD Assessment: What to Expect",
    excerpt: "A comprehensive guide to the ADHD assessment process, including preparation tips and understanding the results.",
    date: "2024-02-03",
    slug: "adhd-assessment-guide",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&q=80",
    category: "ADHD Assessment"
  }
]

export function ADHDBlogs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest ADHD Resources</h2>
          <p className="text-lg text-muted-foreground">
            Expert insights and guidance to support your child's development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adhdBlogs.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}