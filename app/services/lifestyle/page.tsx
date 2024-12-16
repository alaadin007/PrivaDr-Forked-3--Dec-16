import { Metadata } from 'next'
import { LifestyleHero } from "@/components/services/lifestyle/lifestyle-hero"
import { LifestyleTreatments } from "@/components/services/lifestyle/lifestyle-treatments"
import { LifestyleServices } from "@/components/services/lifestyle/lifestyle-services"

export const metadata: Metadata = {
  title: 'Lifestyle Medicine & Holistic Health',
  description: 'Comprehensive lifestyle medicine approach combining evidence-based practices with personalized care for optimal health and wellbeing.',
  keywords: ['lifestyle medicine', 'holistic health', 'wellness', 'preventive care', 'nutrition', 'stress management'],
}

export function generateStaticParams() {
  return [{ slug: 'lifestyle' }]
}

export default function LifestyleMedicinePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <LifestyleHero />
      <LifestyleTreatments />
      <LifestyleServices />
    </main>
  )
}