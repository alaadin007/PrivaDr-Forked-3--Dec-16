"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  delay?: number
  featured?: boolean
}

export function ServiceCard({ icon, title, delay = 0, featured = false }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className={`relative p-6 bg-card hover:bg-accent transition-colors group ${
        featured ? 'ring-2 ring-primary' : ''
      }`}>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`h-16 w-16 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform ${
            featured ? 'bg-primary/10' : ''
          }`}>
            {icon}
          </div>
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
          {featured && (
            <span className="absolute top-2 right-2 text-xs font-medium text-primary">
              Featured
            </span>
          )}
        </div>
      </Card>
    </motion.div>
  )
}