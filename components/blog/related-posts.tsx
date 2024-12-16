import { BlogCard } from "./blog-card"

interface RelatedPostsProps {
  posts: Array<{
    title: string
    excerpt: string
    date: string
    slug: string
    image: string
    category: string
  }>
  currentSlug?: string
}

export function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  const filteredPosts = posts.filter(post => post.slug !== currentSlug).slice(0, 3)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}