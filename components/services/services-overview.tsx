import { Crown, Globe2, Stethoscope, Activity, Brain, Scale, Syringe } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: <Brain className="h-8 w-8 text-purple-600" />,
    title: "ADHD Assessment",
    description: "Expert evaluation and support for children with ADHD",
    href: "/services/adhd-assessment",
    featured: true
  },
  {
    icon: <Crown className="h-8 w-8 text-purple-600" />,
    title: "PrivaLife",
    description: "Premium healthcare tailored to your lifestyle",
    href: "/services/privalife"
  },
  {
    icon: <Globe2 className="h-8 w-8 text-blue-600" />,
    title: "International Patients",
    description: "Healthcare solutions for international clients",
    href: "/services/international"
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-green-600" />,
    title: "General Practice",
    description: "Comprehensive primary care services",
    href: "/services/general-practice"
  },
  {
    icon: <Activity className="h-8 w-8 text-yellow-600" />,
    title: "Lifestyle Medicine",
    description: "Holistic approach to health and wellness",
    href: "/services/lifestyle"
  },
  {
    icon: <Scale className="h-8 w-8 text-pink-600" />,
    title: "Weight Loss",
    description: "Personalized weight management programs",
    href: "/services/weight-loss"
  },
  {
    icon: <Syringe className="h-8 w-8 text-blue-600" />,
    title: "MedSpa | Aesthetic",
    description: "Advanced aesthetic treatments and therapies",
    href: "/services/medspa"
  }
]

export function ServicesOverview() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card className={`p-6 h-full hover:bg-accent transition-colors ${
                service.featured ? 'ring-2 ring-primary' : ''
              }`}>
                <div className="flex flex-col h-full">
                  <div className={`h-16 w-16 rounded-full bg-background flex items-center justify-center mb-4 ${
                    service.featured ? 'bg-primary/10' : ''
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                  {service.featured && (
                    <span className="absolute top-2 right-2 text-xs font-medium text-primary">
                      Featured
                    </span>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}