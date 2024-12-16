import { formatDate } from "@/lib/blog/utils"

interface BlogCardContentProps {
  title: string
  excerpt: string
  category: string
  date: string
}

export function BlogCardContent({ title, excerpt, category, date }: BlogCardContentProps) {
  return (
    <>
      <div className="flex items-center mb-2">
        <span className="text-sm text-primary">{category}</span>
        <span className="mx-2 text-muted-foreground">•</span>
        <time className="text-sm text-muted-foreground">
          {formatDate(date)}
        </time>
      </div>
      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
      <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
    </>
  )
}