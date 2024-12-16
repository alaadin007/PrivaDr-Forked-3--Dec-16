import Image from "next/image"

interface BlogImageProps {
  src: string
  alt: string
}

export function BlogImage({ src, alt }: BlogImageProps) {
  return (
    <div className="relative aspect-[2/1] mb-12 rounded-xl overflow-hidden">
      <Image
        src={src}
        alt={alt || "Blog post featured image"}
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}