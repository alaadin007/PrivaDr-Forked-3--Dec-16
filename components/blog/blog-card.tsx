import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { formatDate } from '@/lib/blog/utils'
import { getDoctorBySlug } from '@/lib/data/doctors'
import type { BlogPost } from '@/lib/blog/types'

interface BlogCardProps {
  post: BlogPost
  priority?: boolean
  delay?: number
}

export function BlogCard({ post, priority = false, delay = 0 }: BlogCardProps) {
  if (!post?.slug) return null

  const doctor = getDoctorBySlug(post.author)
  if (!doctor) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
          <div className="relative aspect-video">
            <Image
              src={post.image}
              alt={`${post.title} - Featured image`}
              fill
              className="object-cover"
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} - Author photo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm">{doctor.name}</p>
                <p className="text-xs text-muted-foreground">{doctor.title}</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-sm text-primary">{post.category}</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <time className="text-sm text-muted-foreground">
                {formatDate(post.date)}
              </time>
            </div>
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}