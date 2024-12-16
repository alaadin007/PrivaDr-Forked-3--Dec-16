"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

interface DoctorImageProps {
  src: string
  alt: string
  priority?: boolean
}

export function DoctorImage({ src, alt, priority = false }: DoctorImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}