"use client"

import Image from "next/image"
import { validateDoctorImage } from "@/lib/data/doctors/utils/image"
import type { ImageConfig } from "@/types/images"

interface DoctorImageProps {
  image: ImageConfig
  priority?: boolean
}

export function DoctorImage({ image, priority = false }: DoctorImageProps) {
  if (!validateDoctorImage(image)) return null

  return (
    <div className="relative aspect-[3/4] rounded-t-2xl overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}