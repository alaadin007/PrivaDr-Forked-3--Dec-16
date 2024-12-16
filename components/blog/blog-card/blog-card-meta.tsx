interface BlogCardMetaProps {
  category: string
  date: string
}

export function BlogCardMeta({ category, date }: BlogCardMetaProps) {
  return (
    <div className="flex items-center mb-2">
      <span className="text-sm text-primary">{category}</span>
      <span className="mx-2 text-muted-foreground">•</span>
      <time className="text-sm text-muted-foreground">{date}</time>
    </div>
  )
}