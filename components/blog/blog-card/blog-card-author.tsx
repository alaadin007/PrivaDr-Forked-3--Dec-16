"use client"

import Image from "next/image"
import { getDoctorBySlug } from "@/lib/data/doctors"

interface BlogCardAuthorProps {
  authorSlug: string
}

export function BlogCardAuthor({ authorSlug }: BlogCardAuthorProps) {
  const doctor = getDoctorBySlug(authorSlug)
  if (!doctor?.image) return null

  return (
    <div className="flex items-center mb-4">
      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
        <Image
          src={doctor.image.src}
          alt={doctor.image.alt}
          width={doctor.image.width}
          height={doctor.image.height}
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-medium text-sm">{doctor.name}</p>
        <p className="text-xs text-muted-foreground">{doctor.title}</p>
      </div>
    </div>
  )
}