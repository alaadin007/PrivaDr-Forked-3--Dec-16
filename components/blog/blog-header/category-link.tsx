"use client"

import Link from "next/link"

interface CategoryLinkProps {
  category: string
}

export function CategoryLink({ category }: CategoryLinkProps) {
  const categorySlug = category.toLowerCase().replace(/\s+/g, "-")
  
  return (
    <Link 
      href={`/services/${categorySlug}`}
      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
    >
      {category}
    </Link>
  )
}