import { Card } from "@/components/ui/card"

const treatments = [
  {
    title: "Mounjaro",
    description: "Mimics hormones that regulate appetite, helping you feel fuller longer and reducing cravings."
  },
  {
    title: "Wegovy",
    description: "Specifically formulated for weight management, it decreases hunger and increases feelings of fullness."
  },
  {
    title: "Ozempic",
    description: "Originally for diabetes management, it aids weight loss by slowing gastric emptying, prolonging satiety after meals."
  }
]

export function WeightLossTreatments() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Weight Loss Treatments</h2>
          <p className="text-lg text-muted-foreground">
            Choose from our range of scientifically proven weight loss solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <Card key={treatment.title} className="p-6 bg-[#0A0A0A]">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-4">{treatment.title}</h3>
                <p className="text-muted-foreground">{treatment.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}