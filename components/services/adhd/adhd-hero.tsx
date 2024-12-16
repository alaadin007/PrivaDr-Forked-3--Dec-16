"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ADHDHero() {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&q=80"
          alt="Child learning background"
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
              ADHD Support and Care for Your Child
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Empowering Children to Overcome Challenges and Unlock Their Potential
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex items-center justify-center gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <div className="flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
                alt="Dr. M. Anwar Haq"
                width={120}
                height={120}
                className="rounded-full border-4 border-white/20"
              />
            </div>
            <div className="text-white">
              <h2 className="text-xl font-semibold mb-2">Dr. M. Anwar Haq</h2>
              <p className="text-gray-200">
                An esteemed pediatrician with over 40 years of experience, specializing in 
                providing compassionate, evidence-based care tailored to each child's individual needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}