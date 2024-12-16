import { Crown, Globe2, Stethoscope, Activity, Brain, Scale, Syringe } from "lucide-react"
import Link from "next/link"
import { ServiceCard } from "./service-card"

const services = [
  {
    icon: <Brain className="h-8 w-8 text-purple-600" />,
    title: "ADHD Assessment",
    href: "/services/adhd-assessment",
    featured: true
  },
  {
    icon: <Crown className="h-8 w-8 text-purple-600" />,
    title: "PrivaLife",
    href: "/services/privalife"
  },
  {
    icon: <Globe2 className="h-8 w-8 text-blue-600" />,
    title: "International Patients",
    href: "/services/international"
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-green-600" />,
    title: "General Practice",
    href: "/services/general-practice"
  },
  {
    icon: <Activity className="h-8 w-8 text-yellow-600" />,
    title: "Lifestyle Medicine",
    href: "/services/lifestyle"
  },
  {
    icon: <Scale className="h-8 w-8 text-pink-600" />,
    title: "Weight Loss",
    href: "/services/weight-loss"
  },
  {
    icon: <Syringe className="h-8 w-8 text-blue-600" />,
    title: "MedSpa | Aesthetic",
    href: "/services/medspa"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-lg">
              Experience healthcare reimagined with our comprehensive range of medical services
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Link key={service.title} href={service.href}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  featured={service.featured}
                  delay={index * 0.1}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}