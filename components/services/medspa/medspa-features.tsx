import { Card } from "@/components/ui/card"
import { Award, Users, Sparkles, Clock } from "lucide-react"

const features = [
  {
    icon: <Award className="h-6 w-6 text-blue-500" />,
    title: "Experienced Practitioners",
    description: "Our team of highly qualified doctors and aesthetic specialists brings years of experience in delivering exceptional results."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-500" />,
    title: "Advanced Techniques",
    description: "Latest technologies and advanced techniques ensuring the highest level of safety and effectiveness."
  },
  {
    icon: <Users className="h-6 w-6 text-pink-500" />,
    title: "Patient-Centered Care",
    description: "Personalized treatment plans aligned with your aesthetic goals, delivered with commitment to transparency."
  },
  {
    icon: <Clock className="h-6 w-6 text-green-500" />,
    title: "Established Since 2007",
    description: "Over 15 years of excellence in delivering transformative aesthetic treatments."
  }
]

export function MedSpaFeatures() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose CosmeDocs?</h2>
          <p className="text-lg text-muted-foreground">
            Experience excellence in aesthetic care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 bg-[#0A0A0A]">
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}