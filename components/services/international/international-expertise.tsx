import { Card } from "@/components/ui/card"
import { Heart, Syringe, Brain, Activity } from "lucide-react"

const expertiseAreas = [
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Cardiology and Heart Surgery",
    description: "Access renowned heart surgeons specializing in advanced procedures, including valve repair and off-pump bypass surgery performed under local anesthesia."
  },
  {
    icon: <Activity className="h-6 w-6 text-yellow-500" />,
    title: "Cancer & Leukemia Treatment",
    description: "World-class oncology care with access to the latest treatments, clinical trials, and personalized therapy plans for all types of cancer and blood disorders."
  },
  {
    icon: <Syringe className="h-6 w-6 text-blue-500" />,
    title: "Aesthetic Medicine and Dermatology",
    description: "Connect with leading specialists in cosmetic procedures and dermatological treatments for enhanced confidence and well-being."
  },
  {
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    title: "Specialist Referrals",
    description: "Whether you require care in orthopedics, neurology, oncology, or another specialty, we'll match you with the best providers to meet your specific medical needs."
  }
]

export function InternationalExpertise() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Areas of Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Access world-class specialists across multiple medical disciplines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area) => (
            <Card key={area.title} className="p-6 bg-[#0A0A0A] hover:bg-[#111111] transition-colors">
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}