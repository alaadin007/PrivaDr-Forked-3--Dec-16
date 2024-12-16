import { Card } from "@/components/ui/card"

const packages = {
  mounjaro: [
    {
      duration: "3-Month Plan",
      weightLoss: "5 kg – 10 kg",
      monthlyPrice: 160,
      totalPrice: 480,
      singlePrice: 200
    },
    {
      duration: "6-Month Plan",
      weightLoss: "10 kg – 15 kg",
      monthlyPrice: 160,
      totalPrice: 960,
      singlePrice: 200
    },
    {
      duration: "12-Month Plan",
      weightLoss: "15 kg+",
      monthlyPrice: 160,
      totalPrice: 1920,
      singlePrice: 200
    }
  ],
  wegovy: [
    {
      duration: "3-Month Plan",
      weightLoss: "5 kg – 10 kg",
      monthlyPrice: 130,
      totalPrice: 390,
      singlePrice: 170
    },
    {
      duration: "6-Month Plan",
      weightLoss: "10 kg – 15 kg",
      monthlyPrice: 130,
      totalPrice: 780,
      singlePrice: 170
    },
    {
      duration: "12-Month Plan",
      weightLoss: "15 kg+",
      monthlyPrice: 130,
      totalPrice: 1560,
      singlePrice: 170
    }
  ],
  ozempic: [
    {
      duration: "3-Month Plan",
      weightLoss: "5 kg – 10 kg",
      monthlyPrice: 200,
      totalPrice: 600,
      singlePrice: 250
    },
    {
      duration: "6-Month Plan",
      weightLoss: "10 kg – 15 kg",
      monthlyPrice: 200,
      totalPrice: 1200,
      singlePrice: 250
    },
    {
      duration: "12-Month Plan",
      weightLoss: "15 kg+",
      monthlyPrice: 200,
      totalPrice: 2400,
      singlePrice: 250
    }
  ]
}

function PriceCard({ 
  duration, 
  weightLoss, 
  monthlyPrice, 
  totalPrice, 
  singlePrice 
}: {
  duration: string
  weightLoss: string
  monthlyPrice: number
  totalPrice: number
  singlePrice: number
}) {
  return (
    <Card className="p-6 bg-[#0A0A0A] hover:bg-[#111111] transition-colors">
      <div className="flex flex-col h-full">
        <h4 className="text-xl font-semibold mb-4">{duration}</h4>
        
        <div className="space-y-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Expected Weight Loss:</p>
            <p className="text-lg font-medium">{weightLoss}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Blood Test</span>
              <span className="text-green-500">✓</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Monthly Follow-up</span>
              <span className="text-green-500">✓</span>
            </div>
          </div>
        </div>
        
        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Monthly:</span>
            <span className="text-lg font-semibold">£{monthlyPrice}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total:</span>
            <span className="text-lg font-semibold">£{totalPrice}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Single Month:</span>
            <span className="text-lg font-semibold">£{singlePrice}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export function WeightLossPackages() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        {Object.entries(packages).map(([treatment, plans]) => (
          <div key={treatment} className="mb-20 last:mb-0">
            <h3 className="text-2xl font-bold text-center mb-12 capitalize">
              {treatment} Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <PriceCard key={index} {...plan} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}