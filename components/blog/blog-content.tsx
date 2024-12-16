import { BlogContent as BlogContentType } from "@/lib/blog"
import { formatBlogContent } from "@/lib/blog/formatter"

interface BlogContentProps {
  content: BlogContentType
}

export function BlogContent({ content }: BlogContentProps) {
  const formattedContent = formatBlogContent(content)
  
  return (
    <div 
      className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-li:text-muted-foreground
        prose-strong:text-foreground prose-strong:font-semibold
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-4 prose-blockquote:border-primary
        prose-blockquote:pl-6 prose-blockquote:italic
        prose-img:rounded-lg"
      dangerouslySetInnerHTML={{ __html: formattedContent }}
    />
  )
}