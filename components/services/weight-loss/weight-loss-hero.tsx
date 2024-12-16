"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WeightLossHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
          alt="Weight Loss Treatment"
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
              Achieve Your Weight Loss Goals with Advanced Weight Loss Injections
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              At our clinic, we understand that achieving and maintaining a healthy weight is a journey 
              unique to every individual. That's why we offer weight loss injections, scientifically 
              designed to help you reach your goals by regulating appetite, reducing cravings, and 
              promoting a healthier metabolism.
            </p>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Comprehensive Support</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-medium mb-2">Flexible Consultations</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Online video consultations available</li>
                    <li>• In-clinic appointments</li>
                    <li>• 24/7 chat support through our app</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Patient Care</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Suitable for ages 12+</li>
                    <li>• Local blood test arrangements</li>
                    <li>• Ongoing monitoring and support</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}