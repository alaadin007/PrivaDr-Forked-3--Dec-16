import { Card } from "@/components/ui/card"
import { Search, HeartPulse, Users, Dna } from "lucide-react"

const screeningServices = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Health Screening",
    description: "Comprehensive health assessments using state-of-the-art diagnostic technology"
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Cancer Screening",
    description: "Early detection programs including TruCheck™ Cancer Blood Test"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Men's & Women's Health",
    description: "Specialized screenings and preventive care for gender-specific health concerns"
  },
  {
    icon: <Dna className="h-6 w-6" />,
    title: "Genetic Testing",
    description: "Advanced genetic analysis for personalized healthcare planning"
  }
]

export function GPScreening() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Health Screening</h2>
          <p className="text-lg text-muted-foreground">
            Advanced preventive health screening utilizing state-of-the-art diagnostic technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {screeningServices.map((service, index) => (
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