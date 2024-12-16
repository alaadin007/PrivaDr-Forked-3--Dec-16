import { Card } from "@/components/ui/card"
import { Home, Hotel, Building2, PartyPopper, Crown } from "lucide-react"

const mobileServices = [
  {
    icon: <Home className="h-6 w-6" />,
    title: "At-Home Treatment",
    description: "IV therapy in the comfort of your home"
  },
  {
    icon: <Hotel className="h-6 w-6" />,
    title: "Hotel Room Service",
    description: "Professional treatment at your hotel"
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Corporate Wellness",
    description: "IV therapy for workplace wellness"
  },
  {
    icon: <PartyPopper className="h-6 w-6" />,
    title: "Event Services",
    description: "Mobile IV services for events"
  },
  {
    icon: <Crown className="h-6 w-6" />,
    title: "VIP Concierge",
    description: "Premium mobile IV therapy service"
  }
]

export function IVMobile() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Mobile IV Service</h2>
          <p className="text-lg text-muted-foreground">
            Exclusive mobile IV therapy bringing professional medical treatments to your preferred location
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mobileServices.map((service, index) => (
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