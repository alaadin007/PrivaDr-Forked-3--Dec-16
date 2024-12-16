import { Metadata } from 'next'
import { WeightLossHero } from "@/components/services/weight-loss/weight-loss-hero"
import { WeightLossTreatments } from "@/components/services/weight-loss/weight-loss-treatments"
import { BMICalculator } from "@/components/services/weight-loss/bmi-calculator"
import { WeightLossPackages } from "@/components/services/weight-loss/weight-loss-packages"
import { WeightLossSupport } from "@/components/services/weight-loss/weight-loss-support"

export const metadata: Metadata = {
  title: 'Weight Loss Treatment & Injections',
  description: 'Advanced weight loss solutions including Mounjaro, Wegovy, and Ozempic treatments. Expert medical support and personalized weight management programs.',
  keywords: ['weight loss', 'Mounjaro', 'Wegovy', 'Ozempic', 'weight management', 'medical weight loss'],
}

export function generateStaticParams() {
  return [{ slug: 'weight-loss' }]
}

export default function WeightLossPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <WeightLossHero />
      <WeightLossTreatments />
      <BMICalculator />
      <WeightLossSupport />
      <WeightLossPackages />
    </main>
  )
}