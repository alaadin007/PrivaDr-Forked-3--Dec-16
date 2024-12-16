"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
          alt="Contact PRIVA Dr."
          fill
          className="object-cover brightness-[0.2]"
          priority
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact PRIVA Dr.
          </h1>
          <p className="text-xl text-gray-200">
            Get in touch with our medical team for appointments, inquiries, or advice
          </p>
        </motion.div>
      </div>
    </section>
  )
}