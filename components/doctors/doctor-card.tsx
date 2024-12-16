"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DoctorImage } from "./doctor-image"
import type { Doctor } from "@/types/doctors"

interface DoctorCardProps extends Doctor {
  delay?: number
}

export function DoctorCard({ 
  name, 
  title, 
  image, 
  expertise = [], 
  slug, 
  delay = 0 
}: DoctorCardProps) {
  if (!slug) return null

  const specialties = expertise.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl bg-background shadow-lg transition-all duration-300 hover:shadow-xl">
        <DoctorImage src={image} alt={name} />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-muted-foreground mb-4">{title}</p>
          {specialties.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}
          <Link href={`/doctors/${slug}`}>
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300"
            >
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}