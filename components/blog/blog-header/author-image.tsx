"use client"

import Image from "next/image"

interface AuthorImageProps {
  imageUrl: string
  author: string
}

export function AuthorImage({ imageUrl, author }: AuthorImageProps) {
  return (
    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
      <Image
        src={imageUrl}
        alt={`${author} - Profile photo`}
        width={48}
        height={48}
        className="object-cover"
      />
    </div>
  )
}