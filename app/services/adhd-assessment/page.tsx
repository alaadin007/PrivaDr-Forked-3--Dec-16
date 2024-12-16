import { Metadata } from 'next'
import { ADHDHero } from "@/components/services/adhd/adhd-hero"
import { ADHDOverview } from "@/components/services/adhd/adhd-overview"
import { ADHDServices } from "@/components/services/adhd/adhd-services"
import { ADHDProcess } from "@/components/services/adhd/adhd-process"
import { ADHDFaq } from "@/components/services/adhd/adhd-faq"
import { ADHDTestimonials } from "@/components/services/adhd/adhd-testimonials"
import { ADHDContact } from "@/components/services/adhd/adhd-contact"
import { ADHDBlogs } from "@/components/services/adhd/adhd-blogs"

export const metadata: Metadata = {
  title: 'ADHD Assessment for Children | Expert Evaluation in Harley Street',
  description: 'Professional ADHD assessment and support for children by Dr. M. Anwar Haq. Comprehensive evaluations, personalized care plans, and ongoing support in London.',
  keywords: ['ADHD assessment', 'child ADHD', 'ADHD diagnosis', 'behavioral assessment', 'child development', 'Harley Street', 'London'],
}

export function generateStaticParams() {
  return [{ slug: 'adhd-assessment' }]
}

export default function ADHDAssessmentPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ADHDHero />
      <ADHDOverview />
      <ADHDServices />
      <ADHDProcess />
      <ADHDFaq />
      <ADHDTestimonials />
      <ADHDContact />
      <ADHDBlogs />
    </main>
  )
}