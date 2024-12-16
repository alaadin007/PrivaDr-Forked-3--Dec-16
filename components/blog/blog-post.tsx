import { BlogHeader } from "./blog-header"
import { BlogImage } from "./blog-image"
import { BlogContent } from "./blog-content"
import { BlogAuthor } from "./blog-author"
import { format } from "date-fns"
import { BlogPost } from "@/lib/blog/types"

interface BlogPostProps {
  post: BlogPost
}

export function BlogPost({ post }: BlogPostProps) {
  const formattedDate = format(new Date(post.date), 'MMM dd, yyyy')

  return (
    <article className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <BlogHeader
            title={post.title}
            date={formattedDate}
            author={post.author}
            category={post.category}
          />
          <BlogImage 
            src={post.image} 
            alt={post.title}
          />
          <BlogContent content={post.content} />
          <div className="mt-12">
            <BlogAuthor authorSlug={post.author} />
          </div>
        </div>
      </div>
    </article>
  )
}