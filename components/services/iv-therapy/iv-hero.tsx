"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function IVHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80"
          alt="IV Therapy treatment"
          fill
          className="object-cover brightness-[0.2]"
          priority
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IV Drip Therapy
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Premium intravenous therapy services delivered in our state-of-the-art Harley Street clinic
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}