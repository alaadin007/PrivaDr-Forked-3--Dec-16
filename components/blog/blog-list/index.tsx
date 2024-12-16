"use client"

import { useState } from "react"
import { BlogGrid } from "./blog-grid"
import { BlogFilters } from "./blog-filters"
import { BlogPagination } from "./blog-pagination"
import { getAllPosts } from "@/lib/data/blog/posts"
import { getAllCategories } from "@/lib/data/blog/categories"

const POSTS_PER_PAGE = 9

export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const posts = getAllPosts()
  const categories = getAllCategories()

  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when changing category
  }

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <BlogFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        <BlogGrid posts={currentPosts} />

        {filteredPosts.length > POSTS_PER_PAGE && (
          <BlogPagination
            currentPage={currentPage}
            totalPosts={filteredPosts.length}
            postsPerPage={POSTS_PER_PAGE}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  )
}