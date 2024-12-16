"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  delay: number
}

export function ServiceItem({ icon, title, delay }: ServiceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-6 bg-card/50 hover:bg-card/80 transition-colors cursor-pointer">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      </Card>
    </motion.div>
  )
}