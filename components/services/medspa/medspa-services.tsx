import { Card } from "@/components/ui/card"
import { Syringe, Sparkles, Zap, Scissors, Droplet } from "lucide-react"

const services = [
  {
    icon: <Syringe className="h-6 w-6 text-blue-500" />,
    title: "Non-Surgical Treatments",
    features: [
      "Dermal Fillers",
      "Botox® Injections",
      "Chemical Peels",
      "Laser Treatments",
      "Skin Rejuvenation",
      "Non-Surgical Rhinoplasty"
    ]
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-500" />,
    title: "Surgical Procedures",
    features: [
      "Liposuction",
      "Facelifts",
      "Blepharoplasty",
      "Hair Transplantation",
      "Breast Augmentation"
    ]
  },
  {
    icon: <Zap className="h-6 w-6 text-pink-500" />,
    title: "Specialized Treatments",
    features: [
      "Hyperhidrosis Treatment",
      "Thread Lifts",
      "Micro-Needling",
      "PRP Therapy",
      "Advanced Skin Care"
    ]
  }
]

export function MedSpaServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Comprehensive Range of Services</h2>
          <p className="text-lg text-muted-foreground">
            Expert aesthetic treatments tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6 bg-[#0A0A0A]">
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}