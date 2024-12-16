import { Card } from "@/components/ui/card"
import { Droplet, Shield, Battery, Zap, Clock } from "lucide-react"

const services = [
  {
    icon: <Droplet className="h-6 w-6" />,
    title: "Vitamin Boost",
    description: "Customized vitamin infusions for optimal health"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Immunity Support",
    description: "Strengthen your immune system"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Energy & Recovery",
    description: "Boost energy levels and enhance recovery"
  },
  {
    icon: <Droplet className="h-6 w-6" />,
    title: "Hydration Therapy",
    description: "Rapid rehydration and wellness"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Anti-Aging Infusions",
    description: "Rejuvenating treatments for skin health"
  }
]

export function IVServices() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">In-Clinic IV Therapy</h2>
          <p className="text-lg text-muted-foreground">
            Each treatment is tailored to your specific health needs and administered by qualified medical professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}