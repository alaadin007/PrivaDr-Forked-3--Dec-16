"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function GPHero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
          alt="Modern medical facility"
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
              Private GP Services in Harley Street
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Delivering Excellence in Private Healthcare
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left">
              <p className="text-lg mb-6">
                In today's fast-paced world, access to quality healthcare is not just a luxury but a necessity. 
                Our Private GP Services are designed to prioritize your health and well-being with a patient-centric 
                approach that sets us apart. Whether you need a routine check-up, urgent medical advice, or ongoing 
                care for a chronic condition, we provide tailored solutions that fit seamlessly into your busy lifestyle.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Care</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Extended 30-minute consultations</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Same-day appointments available</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>24/7 medical support</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Expert Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Experienced NHS-trained doctors</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Advanced health screenings</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      <span>Specialist referral network</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}