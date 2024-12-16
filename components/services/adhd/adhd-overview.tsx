import { Brain, Target, Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function ADHDOverview() {
  const signs = [
    {
      icon: <Target className="h-6 w-6" />,
      text: "Difficulty focusing on tasks or following instructions"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      text: "Challenges with organization and time management"
    },
    {
      icon: <Users className="h-6 w-6" />,
      text: "Frequent interruptions or difficulty waiting their turn"
    }
  ]

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is ADHD?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              ADHD is a neurodevelopmental condition characterized by patterns of inattention, 
              hyperactivity, and impulsivity. While it often presents challenges in learning 
              and behavior, ADHD is not a barrier to success. Many children with ADHD grow up 
              to lead fulfilling, successful lives when provided with the right support.
            </p>
            
            <h3 className="text-xl font-semibold mb-6">Signs of ADHD may include:</h3>
            <div className="space-y-4">
              {signs.map((sign, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {sign.icon}
                    </div>
                    <p className="text-muted-foreground pt-3">{sign.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80"
              alt="Child learning and developing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}