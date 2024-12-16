"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function LifestyleHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
          alt="Lifestyle Medicine"
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
              Lifestyle Medicine
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Choose the Right Care Plan for Your Wellness Journey
            </p>
            <p className="text-lg text-gray-300">
              At our Lifestyle Medicine practice, we believe that health is not just about the absence 
              of disease but about achieving optimal well-being and vitality. Our holistic approach 
              combines evidence-based medicine with personalized care to address your unique health 
              challenges and guide you toward a healthier, more fulfilling life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}