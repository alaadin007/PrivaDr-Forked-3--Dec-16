import { Metadata } from 'next'
import { GPHero } from "@/components/services/general-practice/gp-hero"
import { GPServices } from "@/components/services/general-practice/gp-services"
import { GPScreening } from "@/components/services/general-practice/gp-screening"
import { GPOutOfHours } from "@/components/services/general-practice/gp-out-of-hours"

export const metadata: Metadata = {
  title: 'Private GP Services in Harley Street',
  description: 'Comprehensive private GP services including same-day appointments, health screenings, and 24/7 medical care in Central London.',
  keywords: ['private GP', 'doctor', 'health screening', 'medical care', 'harley street', '24/7 healthcare'],
}

export function generateStaticParams() {
  return [{ slug: 'general-practice' }]
}

export default function GeneralPracticePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <GPHero />
      <GPServices />
      <GPScreening />
      <GPOutOfHours />
    </main>
  )
}