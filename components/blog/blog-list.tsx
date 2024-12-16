"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BlogCard } from './blog-card'
import { BlogFilters } from './blog-filters'
import { BlogPagination } from './blog-pagination'
import { getAllPosts } from '@/lib/data/blog/posts'
import { getAllCategories } from '@/lib/data/blog/categories'
import type { BlogPost } from '@/lib/blog/types'

export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const postsPerPage = 9

  const posts = getAllPosts()
  const categories = getAllCategories()

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <BlogFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {currentPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              delay={index * 0.1}
              priority={index < 3}
            />
          ))}
        </div>

        {filteredPosts.length > postsPerPage && (
          <BlogPagination
            currentPage={currentPage}
            totalPosts={filteredPosts.length}
            postsPerPage={postsPerPage}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  )
}