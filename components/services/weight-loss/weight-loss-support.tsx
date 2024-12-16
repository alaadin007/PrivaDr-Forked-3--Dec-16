import { Card } from "@/components/ui/card"
import { MessageCircle, VideoIcon, TestTube, Users, Clock, Calendar } from "lucide-react"

const supportFeatures = [
  {
    icon: <MessageCircle className="h-6 w-6 text-blue-500" />,
    title: "24/7 Chat Support",
    description: "Access our medical team anytime through our secure messaging platform"
  },
  {
    icon: <VideoIcon className="h-6 w-6 text-purple-500" />,
    title: "Video Consultations",
    description: "Convenient online appointments from the comfort of your home"
  },
  {
    icon: <TestTube className="h-6 w-6 text-green-500" />,
    title: "Blood Test Support",
    description: "We arrange blood tests with local facilities for your convenience"
  },
  {
    icon: <Users className="h-6 w-6 text-yellow-500" />,
    title: "Age-Appropriate Care",
    description: "Specialized programs suitable for patients aged 12 and above"
  },
  {
    icon: <Clock className="h-6 w-6 text-red-500" />,
    title: "Continuous Support",
    description: "Regular check-ins and progress monitoring"
  },
  {
    icon: <Calendar className="h-6 w-6 text-indigo-500" />,
    title: "Flexible Scheduling",
    description: "Choose between in-clinic or online appointments"
  }
]

export function WeightLossSupport() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Support System</h2>
          <p className="text-lg text-muted-foreground">
            We provide extensive support throughout your weight loss journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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