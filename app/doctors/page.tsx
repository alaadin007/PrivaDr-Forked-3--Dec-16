import { Metadata } from 'next'
import { DoctorsList } from "@/components/doctors/doctors-list"

export const metadata: Metadata = {
  title: 'Our Expert Doctors | PRIVA Dr.',
  description: 'Meet our team of experienced healthcare professionals at PRIVA Dr., including specialists in pediatrics, dermatology, and aesthetic medicine.',
  keywords: ['doctors', 'specialists', 'healthcare professionals', 'medical experts', 'harley street doctors'],
}

export default function DoctorsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Expert Doctors
            </h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to providing exceptional care with decades of experience
            </p>
          </div>
        </div>
      </section>
      <DoctorsList />
    </main>
  )
}