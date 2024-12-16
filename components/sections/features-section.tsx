"use client"

import { motion } from "framer-motion"
import { Shield, Users, Stethoscope, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Expert Care",
    description: "Specialized medical professionals with extensive experience"
  },
  {
    icon: <Users className="h-8 w-8 text-purple-500" />,
    title: "Patient-Centered",
    description: "Personalized care tailored to individual needs"
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-green-500" />,
    title: "Quality Assured",
    description: "Adherence to highest medical standards"
  },
  {
    icon: <Clock className="h-8 w-8 text-yellow-500" />,
    title: "24/7 Support",
    description: "Round-the-clock access to medical care"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose PRIVA Dr.</h2>
          <p className="text-lg text-muted-foreground">
            Experience healthcare that's designed around you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-card/50 hover:bg-card transition-colors">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}