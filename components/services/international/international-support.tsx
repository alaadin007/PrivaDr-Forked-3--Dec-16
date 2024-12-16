import { Card } from "@/components/ui/card"
import { GraduationCap, Network, Shield, Clock } from "lucide-react"

const supportFeatures = [
  {
    icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
    title: "Expert Knowledge",
    description: "Our team consists of experienced medical professionals actively engaged with the UK healthcare community."
  },
  {
    icon: <Network className="h-6 w-6 text-purple-500" />,
    title: "Insider Access",
    description: "Close relationships with nurses, junior doctors, and consultants provide unparalleled access to specialists."
  },
  {
    icon: <Shield className="h-6 w-6 text-green-500" />,
    title: "Cost-Effective Solutions",
    description: "We streamline your healthcare journey by connecting you with the right resources the first time."
  },
  {
    icon: <Clock className="h-6 w-6 text-yellow-500" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your medical and logistical needs during your stay."
  }
]

export function InternationalSupport() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose PRIVA Dr?</h2>
          <p className="text-lg text-muted-foreground">
            Experience seamless healthcare coordination with our expert team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportFeatures.map((feature) => (
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