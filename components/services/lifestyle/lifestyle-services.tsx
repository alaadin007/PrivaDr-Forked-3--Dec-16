import { Card } from "@/components/ui/card"
import { Heart, Scale, Apple } from "lucide-react"

const services = [
  {
    icon: <Heart className="h-6 w-6 text-blue-500" />,
    title: "Personalised Health Coaching",
    description: "Comprehensive lifestyle medicine approach integrating evidence-based practices with personalized coaching.",
    features: [
      "Personalised Health Coaching",
      "Mindfulness and Stress Management",
      "Nutritional Guidance",
      "Weight Management Programs",
      "Physical Activity Plans"
    ]
  },
  {
    icon: <Scale className="h-6 w-6 text-purple-500" />,
    title: "Weight Management",
    description: "Advanced weight management solutions combining medical expertise with lifestyle interventions.",
    features: [
      "Mounjaro Injections",
      "Wegovy Treatment",
      "Ozempic Program",
      "Nutritional Support",
      "Lifestyle Modification"
    ]
  },
  {
    icon: <Apple className="h-6 w-6 text-green-500" />,
    title: "Wellness Services",
    description: "Holistic wellness services designed to optimize your health and vitality.",
    features: [
      "GP Private Consultation",
      "Health Screening",
      "Nutritional Assessment",
      "Stress Management",
      "Wellness Planning"
    ]
  }
]

export function LifestyleServices() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-[#0A0A0A]">
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
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