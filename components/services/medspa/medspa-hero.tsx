"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function MedSpaHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
          alt="Aesthetic Medicine"
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
              CosmeDocs at PRIVA Dr.
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transformative Aesthetic Care with Expert Precision
            </p>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">
                At CosmeDocs, we are dedicated to helping you look and feel your best through 
                cutting-edge aesthetic treatments delivered with care, expertise, and precision. 
                Now available through PRIVA Dr., our services provide the perfect blend of surgical 
                and non-surgical cosmetic solutions tailored to meet your unique goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}