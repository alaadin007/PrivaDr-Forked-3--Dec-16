import { ClipboardCheck, Users, Settings, HeartHandshake } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function ADHDServices() {
  const services = [
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Comprehensive Assessments",
      description: "Thorough ADHD assessments using the latest diagnostic tools and techniques"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multidisciplinary Approach",
      description: "Working closely with parents, teachers, and other professionals"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Personalized Management Plans",
      description: "Individualized plans tailored to your child's strengths and challenges"
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Ongoing Support",
      description: "Continuous guidance to help families navigate challenges and celebrate progress"
    }
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80"
          alt="Background pattern"
          fill
          className="object-cover opacity-5"
        />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Our ADHD Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-background/60 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}