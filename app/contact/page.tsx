import { Metadata } from 'next'
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: 'Contact Us | PRIVA Dr.',
  description: 'Get in touch with PRIVA Dr. for appointments, inquiries, or medical advice. Located in Harley Street, London.',
  keywords: ['contact', 'appointments', 'medical consultation', 'harley street', 'london healthcare'],
}

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ContactHero />
      <div className="container px-4 mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you as soon as possible. 
              You can also request a callback at your preferred time.
            </p>
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
    </main>
  )
}