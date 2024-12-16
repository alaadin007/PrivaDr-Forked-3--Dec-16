"use client"

import Link from 'next/link'
import { Card } from "@/components/ui/card"
import { BlogCardImage } from "./blog-card-image"
import { BlogCardContent } from "./blog-card-content" 
import { BlogCardAuthor } from "./blog-card-author"
import { motion } from "framer-motion"
import type { BlogPost } from "@/lib/blog/types"

interface BlogCardProps {
  post: BlogPost
  priority?: boolean
  delay?: number
}

export function BlogCard({ post, priority = false, delay = 0 }: BlogCardProps) {
  if (!post?.slug) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
          <BlogCardImage 
            src={post.image} 
            alt={post.title} 
            priority={priority} 
          />
          <div className="p-6">
            <BlogCardAuthor authorSlug={post.author} />
            <BlogCardContent 
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
            />
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}