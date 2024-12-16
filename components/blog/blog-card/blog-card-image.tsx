"use client"

import Image from "next/image"

interface BlogCardImageProps {
  src: string
  alt: string
  priority?: boolean
}

export function BlogCardImage({ src, alt, priority = false }: BlogCardImageProps) {
  if (!src) return null

  return (
    <div className="relative aspect-video">
      <Image
        src={src}
        alt={alt || "Blog post featured image"}
        width={1920}
        height={1080}
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}