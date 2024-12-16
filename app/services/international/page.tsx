import { Metadata } from 'next'
import { InternationalHero } from "@/components/services/international/international-hero"
import { InternationalServices } from "@/components/services/international/international-services"
import { InternationalExpertise } from "@/components/services/international/international-expertise"
import { InternationalSupport } from "@/components/services/international/international-support"

export const metadata: Metadata = {
  title: 'International Patient Services | PRIVA Dr.',
  description: 'Expert healthcare services for international patients in London. Access world-class medical professionals and facilities with personalized support.',
  keywords: ['international healthcare', 'medical tourism', 'private healthcare london', 'harley street', 'international patients'],
}

export function generateStaticParams() {
  return [{ slug: 'international' }]
}

export default function InternationalPatientsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <InternationalHero />
      <InternationalServices />
      <InternationalExpertise />
      <InternationalSupport />
    </main>
  )
}