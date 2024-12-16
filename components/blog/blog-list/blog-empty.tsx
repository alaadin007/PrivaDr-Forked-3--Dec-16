import { Card } from "@/components/ui/card"

export function BlogEmpty() {
  return (
    <Card className="p-8 text-center">
      <p className="text-lg text-muted-foreground">
        No blog posts found for this category.
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        Try selecting a different category or check back later.
      </p>
    </Card>
  )
}