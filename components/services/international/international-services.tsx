import { Card } from "@/components/ui/card"
import { Users, Stethoscope, Calendar, Plane } from "lucide-react"

const services = [
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: "Specialist Matching",
    description: "We identify and connect you with leading consultants and surgeons across various medical specialties to address your unique needs."
  },
  {
    icon: <Stethoscope className="h-6 w-6 text-purple-500" />,
    title: "Medical Coordination",
    description: "From scheduling appointments to hospital admissions, we handle every detail, ensuring your care is well-organized and hassle-free."
  },
  {
    icon: <Calendar className="h-6 w-6 text-green-500" />,
    title: "Second Opinions",
    description: "Access expert second opinions to gain confidence in your medical decisions and ensure you're exploring all available treatment options."
  },
  {
    icon: <Plane className="h-6 w-6 text-yellow-500" />,
    title: "Logistical Support",
    description: "We provide assistance with travel arrangements, accommodations, and other logistical needs, allowing you to focus entirely on your health."
  }
]

export function InternationalServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive support for international patients seeking medical care in the UK
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6 bg-[#0A0A0A]">
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}