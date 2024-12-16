"use client"

import Image from "next/image"
import Link from "next/link"
import { getDoctorBySlug } from "@/lib/doctors"

interface BlogHeaderProps {
  title: string
  date: string
  author: string
  category: string
  img: string
}

export function BlogHeader({ title, date, author, category, img }: BlogHeaderProps) {
  // Get doctor information
  const doctor = getDoctorBySlug(author)
  
  // Determine the image URL based on the category
  const imageUrl = category === "Child Development" 
    ? "https://www.cosmedocs.com/wp-content/uploads/2024/12/dr-anwar-haq.jpg"
    : "https://www.cosmedocs.com/wp-content/uploads/2023/08/dr-hena_haq.jpg"

  return (
    <header className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <Link 
          href={`/services/${category.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {category}
        </Link>
        <span className="text-muted-foreground">•</span>
        <time className="text-sm text-muted-foreground">
          {date}
        </time>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
          <Image
            src={doctor?.image || imageUrl}
            alt={`${doctor?.name || author} - Profile photo`}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{doctor?.name || author}</p>
          <p className="text-sm text-muted-foreground">
            {doctor?.title || (category === "ADHD Assessment" ? "Consultant Pediatrician" : "General Practitioner")}
          </p>
        </div>
      </div>
    </header>
  )
}