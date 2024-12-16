import { Card } from "@/components/ui/card"
import { Clock, Home, Hotel, Calendar, Stethoscope, Leaf } from "lucide-react"

const services = [
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Private GP Services",
    description: "Extended 30-minute consultations for thorough assessment"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24 Hour Private Health Care",
    description: "Round-the-clock access to medical care"
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Doctor Visiting Service",
    description: "Professional medical care in the comfort of your home"
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Menopause Clinic",
    description: "Specialized care and support for menopause management"
  },
  {
    icon: <Hotel className="h-6 w-6" />,
    title: "Hotel Services",
    description: "Medical care for hotel guests"
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Same Day Appointments",
    description: "Quick access to medical care when you need it"
  }
]

export function GPServices() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our GP Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive primary care services tailored to your needs
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