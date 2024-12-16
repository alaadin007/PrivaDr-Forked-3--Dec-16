import { CategoryLink } from "./category-link"
import { AuthorImage } from "./author-image"
import { AuthorInfo } from "./author-info"

interface BlogHeaderProps {
  title: string
  date: string
  author: string
  category: string
  img: string
}

export function BlogHeader({ 
  title, 
  date, 
  author, 
  category, 
  img 
}: BlogHeaderProps) {
  // Determine the image URL based on the category
  const imageUrl = category === "Child Development" 
    ? "https://www.cosmedocs.com/wp-content/uploads/2024/12/dr-anwar-haq.jpg"
    : "https://www.cosmedocs.com/wp-content/uploads/2023/08/dr-hena_haq.jpg"

  return (
    <header className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <CategoryLink category={category} />
        <span className="text-muted-foreground">•</span>
        <time className="text-sm text-muted-foreground">
          {date}
        </time>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

      <div className="flex items-center gap-4">
        <AuthorImage imageUrl={imageUrl} author={author} />
        <AuthorInfo author={author} category={category} />
      </div>
    </header>
  )
}