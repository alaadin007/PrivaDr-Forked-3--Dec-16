"use client"

import { Button } from '@/components/ui/button'
import type { BlogCategory } from '@/lib/blog/types'

interface BlogFiltersProps {
  categories: BlogCategory[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function BlogFilters({
  categories,
  selectedCategory,
  onCategoryChange
}: BlogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
      >
        All Posts
      </Button>
      {categories.map(category => (
        <Button
          key={category.id}
          variant={selectedCategory === category.slug ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category.slug)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}