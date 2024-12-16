import { Card } from "@/components/ui/card"
import { Clock, Video, Syringe, Hotel, Plane } from "lucide-react"

const outOfHoursServices = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24 Hour Private Health Care",
    description: "Round-the-clock access to expert medical care in Central London"
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Virtual Consultations",
    description: "Secure video consultations with experienced doctors"
  },
  {
    icon: <Syringe className="h-6 w-6" />,
    title: "IV Drip Therapy",
    description: "In-clinic and mobile IV vitamin replacement therapy"
  },
  {
    icon: <Hotel className="h-6 w-6" />,
    title: "Hotel Services",
    description: "Medical care for hotel guests and visitors"
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "International Visitors",
    description: "Specialized care for international patients"
  }
]

export function GPOutOfHours() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Out of Hours GP</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive medical care available 24/7, including specialized IV therapy treatments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outOfHoursServices.map((service, index) => (
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