import { BlogCard } from "../blog-card"
import { BlogEmpty } from "./blog-empty"
import type { BlogPost } from "@/lib/blog/types"

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return <BlogEmpty />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {posts.map((post, index) => (
        <BlogCard
          key={post.id}
          post={post}
          delay={index * 0.1}
          priority={index < 3}
        />
      ))}
    </div>
  )
}