import { Metadata } from 'next'
import { DoctorProfile } from "@/components/doctors/doctor-profile"
import { notFound } from "next/navigation"
import { getDoctorBySlug } from "@/lib/doctors"

interface DoctorPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const doctor = getDoctorBySlug(params.slug)
  
  if (!doctor) {
    return {
      title: 'Doctor Not Found',
      description: 'The requested doctor profile could not be found.'
    }
  }

  return {
    title: `${doctor.name} | PRIVA Dr.`,
    description: `Learn more about ${doctor.name}, ${doctor.title} at PRIVA Dr. Harley Street.`,
    keywords: ['doctor', 'medical specialist', 'harley street', doctor.name.toLowerCase(), ...doctor.expertise.map(e => e.toLowerCase())]
  }
}

export function generateStaticParams() {
  return [
    { slug: "dr-m-anwar-haq" },
    { slug: "dr-hassan-a-mirza" },
    { slug: "dr-hena-haq" },
    { slug: "dr-ahmed-haq" }
  ]
}

export default function DoctorPage({ params }: DoctorPageProps) {
  const doctor = getDoctorBySlug(params.slug)
  
  if (!doctor) {
    notFound()
  }

  return <DoctorProfile {...doctor} />
}