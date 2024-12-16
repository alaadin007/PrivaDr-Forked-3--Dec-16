import { Metadata } from 'next'
import { MedSpaHero } from "@/components/services/medspa/medspa-hero"
import { MedSpaServices } from "@/components/services/medspa/medspa-services"
import { MedSpaFeatures } from "@/components/services/medspa/medspa-features"

export const metadata: Metadata = {
  title: 'MedSpa & Aesthetic Services | PRIVA Dr.',
  description: 'Expert non-surgical aesthetic treatments at PRIVA Dr. Harley Street. Offering dermal fillers, Botox, chemical peels, and advanced skin treatments since 2007.',
  keywords: ['medspa', 'aesthetic treatments', 'cosmetic procedures', 'dermal fillers', 'botox', 'harley street', 'london'],
}

export function generateStaticParams() {
  return [{ slug: 'medspa' }]
}

export default function MedSpaPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <MedSpaHero />
      <MedSpaServices />
      <MedSpaFeatures />
    </main>
  )
}