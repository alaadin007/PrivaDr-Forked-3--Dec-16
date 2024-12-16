"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function InternationalHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
          alt="International Healthcare"
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
              Your Trusted Partner for International Patients
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Connecting You with World-Class Healthcare in the UK
            </p>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">
                At PRIVA Dr., we understand that seeking medical care abroad can feel overwhelming. 
                With a team of London medical graduates experienced in both NHS and private hospitals, 
                we leverage our in-depth understanding of the UK healthcare system to provide seamless, 
                personalized guidance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}